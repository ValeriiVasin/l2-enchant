import { Enchant, EnchantMap, Item } from '../types';

const chances = [60, 50, 40, 35, 30, 28, 26, 24, 22, 20];
const items = [
  Item.HeroCrown,
  Item.HeroCrown_1,
  Item.HeroCrown_2,
  Item.HeroCrown_3,
  Item.HeroCrown_4,
  Item.HeroCrown_5,
  Item.HeroCrown_6,
  Item.HeroCrown_7,
  Item.HeroCrown_8,
  Item.HeroCrown_9,
  Item.HeroCrown_10,
];

export const heroCrownEnchantMap: EnchantMap = new Map(
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
