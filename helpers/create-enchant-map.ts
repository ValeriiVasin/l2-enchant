import { Item } from '../items';
import { EnchantMap, EnchantStrategy, EnchantStrategyConfig } from '../types';

export function createEnchantMap({
  items,
  chances,
  enchantItem = Item.Nothing,
  strategy,
}: EnchantStrategyConfig): EnchantMap {
  const result: EnchantMap = new Map();

  if (items.length !== chances.length + 1) {
    throw new Error('Items should always contain one item more than chances');
  }

  for (let i = 0; i < chances.length; i++) {
    const item = items[i];
    const successItem = items[i + 1];
    const failItem = pickItemOnFail(items, i, strategy);
    const chance = chances[i];

    result.set(item, {
      item,
      required: enchantItem,
      success: successItem,
      fail: failItem,
      successRate: chance,
    });
  }

  return result;
}

function pickItemOnFail(
  items: Item[],
  index: number,
  strategy: EnchantStrategy
): Item {
  switch (strategy) {
    case EnchantStrategy.Destroy:
      return Item.Nothing;
    case EnchantStrategy.Drop:
      return items[0];
    case EnchantStrategy.Decrease:
      return items[Math.max(index - 1, 0)];
  }
}
