/**
 * Enchants item to next, or drops to the very first in the list
 */
import { Item } from '../../items';
import { Enchant, EnchantMap, StrategyConfig } from '../../types';

export function enchantOrDrop({
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
          fail: items[0],
          successRate: chances[index],
        },
      ];
    })
  );
}
