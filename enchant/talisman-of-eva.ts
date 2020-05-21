import { EnchantMap, Item, Enchant } from '../types';

const chances = [60, 50, 40, 35, 30, 28, 26, 24, 22, 20];
const items = [
  Item.TalismanOfEva,
  Item.TalismanOfEva_1,
  Item.TalismanOfEva_2,
  Item.TalismanOfEva_3,
  Item.TalismanOfEva_4,
  Item.TalismanOfEva_5,
  Item.TalismanOfEva_6,
  Item.TalismanOfEva_7,
  Item.TalismanOfEva_8,
  Item.TalismanOfEva_9,
  Item.TalismanOfEva_10,
];

export const talismanOfEvaEnchantMap: EnchantMap = new Map(
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
