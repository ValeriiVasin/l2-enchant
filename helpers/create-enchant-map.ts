import { Item } from '../items';
import type { EnchantMap } from '../types';
import { EnchantStrategy } from '../types';

interface Config {
  strategy: EnchantStrategy;
  chances: number[];
  items: Item[];
  enchantItem?: Item;
}

export function createEnchantMap({ strategy, items, chances, enchantItem = Item.Nothing }: Config): EnchantMap {
  const result: EnchantMap = new Map();

  if (items.length !== chances.length + 1) {
    throw new Error('Items should always contain one item more than chances');
  }

  for (let i = 0; i < chances.length; i++) {
    const item = items[i];
    const requiredItem = strategy === EnchantStrategy.TwoToOne ? item : enchantItem;
    const successItem = items[i + 1];
    const failItem = pickItemOnFail(items, i, strategy);
    const chance = chances[i];

    result.set(item, {
      item,
      cost: requiredItem,
      results: [
        { chance, item: successItem },
        { chance: 100 - chance, item: failItem },
      ],
    });
  }

  return result;
}

function pickItemOnFail(items: Item[], index: number, strategy: EnchantStrategy): Item {
  switch (strategy) {
    case EnchantStrategy.Destroy:
      return Item.Nothing;
    case EnchantStrategy.Drop:
      return items[0];
    case EnchantStrategy.Decrease:
      return items[Math.max(index - 1, 0)];
    case EnchantStrategy.TwoToOne:
      return items[index];
    case EnchantStrategy.Safe:
      return items[index];
  }
}
