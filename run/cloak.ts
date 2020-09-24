import { enchant } from '../helpers/enchant';
import { Item } from '../types';

const enchants: Array<[number, Item]> = [
  [1, Item.Cloak_1],
  [2, Item.Cloak_2],
  [3, Item.Cloak_3],
  [4, Item.Cloak_4],
  [5, Item.Cloak_5],
  [6, Item.Cloak_6],
  [7, Item.Cloak_7],
  [8, Item.Cloak_8],
  [9, Item.Cloak_9],
  [10, Item.Cloak_10],
];

for (const [lvl, item] of enchants) {
  console.log(`Плащ +0 => +${lvl}`, enchant(Item.Cloak, item, 1000));
}
