import { enchant } from '../helpers/enchant';
import { header } from '../helpers/header';
import { Item } from '../types';

const enchants: Array<[number, Item]> = [
  [1, Item.IgnisNecklace_1],
  [2, Item.IgnisNecklace_2],
  [3, Item.IgnisNecklace_3],
  [4, Item.IgnisNecklace_4],
  [5, Item.IgnisNecklace_5],
  [6, Item.IgnisNecklace_6],
  [7, Item.IgnisNecklace_7],
  [8, Item.IgnisNecklace_8],
];

for (const [lvl, item] of enchants) {
  console.log(header(`Ожерелье Игниса +0 => +${lvl}`));
  console.log(enchant(Item.IgnisNecklace, item, 1000));
}
