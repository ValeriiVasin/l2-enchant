import { Item } from '../items';
import { Enchant, EnchantMap } from '../types';

const chances = [100, 100, 100, ...Array(20).fill(66.6 + 5)];
const items = [
  Item.BOP,
  Item.BOP_1,
  Item.BOP_2,
  Item.BOP_3,
  Item.BOP_4,
  Item.BOP_5,
  Item.BOP_6,
  Item.BOP_7,
  Item.BOP_8,
  Item.BOP_9,
  Item.BOP_10,
  Item.BOP_11,
  Item.BOP_12,
  Item.BOP_13,
  Item.BOP_14,
  Item.BOP_15,
  Item.BOP_16,
];

/**
 * @TODO improve Bx calculation
 */
export const bopEnchantMap: EnchantMap = new Map(
  items.slice(0, -1).map((item, index): [Item, Enchant] => {
    return [
      item,
      {
        item,
        required: Item.EWB,
        success: items[index + 1],
        fail: Item.Nothing,
        successRate: chances[index],
      },
    ];
  })
);
