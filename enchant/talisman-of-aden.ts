import { EnchantMap, Item, Enchant } from '../types';

const chances = [100, 80, 70, 60, 40, 30, 24, 16, 10, 10];
const items = [
  Item.TalismanOfAden,
  Item.TalismanOfAden_1,
  Item.TalismanOfAden_2,
  Item.TalismanOfAden_3,
  Item.TalismanOfAden_4,
  Item.TalismanOfAden_5,
  Item.TalismanOfAden_6,
  Item.TalismanOfAden_7,
  Item.TalismanOfAden_8,
  Item.TalismanOfAden_9,
  Item.TalismanOfAden_10,
];

export const talismanOfAdenEnchantMap: EnchantMap = new Map(
  items.slice(0, -1).map((item, index): [Item, Enchant] => {
    return [
      item,
      {
        item,
        required: Item.Nothing,
        success: items[index + 1],
        fail: Item.Nothing,
        successRate: chances[index],
      },
    ];
  })
);
