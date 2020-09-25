import { enchant } from '../helpers/enchant';
import { Item } from '../items';

const enchants: Array<[number, Item]> = [
  [2, Item.Rune_2],
  [3, Item.Rune_3],
  [4, Item.Rune_4],
  [5, Item.Rune_5],
  [6, Item.Rune_6],
  [7, Item.Rune_7],
  [8, Item.Rune_8],
  [9, Item.Rune_9],
  [10, Item.Rune_10],
  [11, Item.Rune_11],
  [12, Item.Rune_12],
  [13, Item.Rune_13],
];

for (const [lvl, item] of enchants) {
  console.log(`Руна Ур.1 => Руна Ур.${lvl}`, enchant(Item.Rune_1, item, 1000));
}
