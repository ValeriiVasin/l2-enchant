/**
 * Enchants item, or decrease enchant level by 1
 */

import { Item } from '../../items';
import { Enchant, EnchantMap, StrategyConfig } from '../../types';

export function enchantOrDecrease({
  items,
  chances,
  enchantItem = Item.Nothing,
}: StrategyConfig): EnchantMap {
  return new Map(
    items.slice(0, -1).map((item, index): [Item, Enchant] => {
      return [
        item,
        {
          item,
          required: enchantItem,
          success: items[index + 1],
          fail: items[Math.max(index - 1, 0)],
          successRate: chances[index],
        },
      ];
    })
  );
}
