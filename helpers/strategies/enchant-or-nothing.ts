/**
 * If enchant fail - you have nothing on you
 */
import { Item } from '../../items';
import { Enchant, EnchantMap, StrategyConfig } from '../../types';

export function enchantOrNothing({
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
          fail: Item.Nothing,
          successRate: chances[index],
        },
      ];
    })
  );
}
