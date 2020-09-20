import { enchant } from '../helpers/enchant';
import { Item } from '../types';

const enchants: Array<[number, Item]> = [
  [3, Item.BOP_3],
  [4, Item.BOP_4],
  [5, Item.BOP_5],
  [6, Item.BOP_6],
  [7, Item.BOP_7],
  [8, Item.BOP_8],
  [9, Item.BOP_9],
  [10, Item.BOP_10],
  [11, Item.BOP_11],
  [12, Item.BOP_12],
  [13, Item.BOP_13],
  [14, Item.BOP_14],
  [15, Item.BOP_15],
  [16, Item.BOP_16],
];

for (let [lvl, item] of enchants) {
  console.log(`Лук Угрозы +0 => +${lvl}`, enchant(Item.BOP, item, 1000));
}
