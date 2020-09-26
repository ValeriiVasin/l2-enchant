import { enchant } from '../helpers/enchant';
import { Item } from '../items';

const enchants: Array<[number, Item]> = [
  [3, Item.TalismanOfEva_3],
  [4, Item.TalismanOfEva_4],
  [5, Item.TalismanOfEva_5],
  [6, Item.TalismanOfEva_6],
  [7, Item.TalismanOfEva_7],
];

for (const [lvl, item] of enchants) {
  console.log(
    `Талисман Евы +0 => +${lvl}`,
    enchant(Item.TalismanOfEva, item, 1000),
  );
}
