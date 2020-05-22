import { EnchantMap, Item, Enchant } from '../types';

const chances = [70, 70, 70, 70, 70, 40, 40, 40, 40, 40, 40, 40];
const items = [
  Item.Rune_1,
  Item.Rune_2,
  Item.Rune_3,
  Item.Rune_4,
  Item.Rune_5,
  Item.Rune_6,
  Item.Rune_7,
  Item.Rune_8,
  Item.Rune_9,
  Item.Rune_10,
  Item.Rune_11,
  Item.Rune_12,
  Item.Rune_13,
];

export const runeEnchantMap: EnchantMap = new Map([
  ...items.slice(0, -1).map((item, index): [Item, Enchant] => [
    item,
    {
      item,
      required: Item.Rune_1,
      successRate: chances[index],
      success: items[index + 1],
      fail: Item.Rune_1,
    },
  ]),
]);
