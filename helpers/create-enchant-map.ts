import { Item } from '../items';
import type { EnchantMap } from '../types';
import { EnchantStrategy } from '../types';

interface BaseConfig {
  strategy: EnchantStrategy;
  /**
   * Enchant chances. Numbers in range (0..100]
   */
  chances: number[];
  items: Item[];
  /**
   * Cost of enchant
   * @default Item.Nothing
   */
  enchantItem?: Item;
}

type StrategiesWithoutDrop = Exclude<EnchantStrategy, EnchantStrategy.Drop>;

interface GeneralConfig extends BaseConfig {
  strategy: StrategiesWithoutDrop;
}

interface DropStrategyConfig extends BaseConfig {
  strategy: EnchantStrategy.Drop;
  boundaries?: Set<Item>;
}

export function createEnchantMap(config: GeneralConfig | DropStrategyConfig): EnchantMap {
  const { strategy, items, chances, enchantItem = Item.Nothing } = config;
  const result: EnchantMap = new Map();

  if (items.length !== chances.length + 1) {
    throw new Error('Items should always contain one item more than chances');
  }

  for (let i = 0; i < chances.length; i++) {
    const item = items[i];
    const requiredItem = strategy === EnchantStrategy.TwoToOne ? item : enchantItem;
    const successItem = items[i + 1];
    const failItem =
      strategy === EnchantStrategy.Drop
        ? pickDropStrategyItemOnFail({ items, index: i, boundaries: config.boundaries })
        : pickItemOnFail({ items, index: i, strategy });
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

function pickItemOnFail({
  items,
  index,
  strategy,
}: {
  items: Item[];
  index: number;
  strategy: StrategiesWithoutDrop;
}): Item {
  switch (strategy) {
    case EnchantStrategy.Destroy:
      return Item.Nothing;
    case EnchantStrategy.Decrease:
      return items[Math.max(index - 1, 0)];
    case EnchantStrategy.TwoToOne:
      return items[index];
    case EnchantStrategy.Safe:
      return items[index];
  }
}

function pickDropStrategyItemOnFail({
  items,
  index,
  boundaries,
}: {
  items: Item[];
  index: number;
  boundaries?: Set<Item>;
}): Item {
  if (!boundaries) {
    return items[0];
  }

  for (let i = index; i > 0; i--) {
    if (boundaries.has(items[i])) {
      return items[i];
    }
  }

  return items[0];
}
