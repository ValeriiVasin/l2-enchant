import { enchant } from '../helpers/enchant';
import { Item } from '../items';

const enchants: Array<[number, Item]> = [
  [4, Item.Hat_4],
  [5, Item.Hat_5],
  [6, Item.Hat_6],
  [7, Item.Hat_7],
];

for (const [lvl, item] of enchants) {
  console.log(`Головной Убор +0 => +${lvl}`, enchant(Item.Hat, item, 1000));
}
