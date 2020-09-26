import { enchant } from '../helpers/enchant';
import { Item } from '../items';

const enchants: Array<[number, Item]> = [
  [4, Item.Agathion_4],
  [5, Item.Agathion_5],
  [6, Item.Agathion_6],
  [7, Item.Agathion_7],
  [8, Item.Agathion_8],
  [9, Item.Agathion_9],
  [10, Item.Agathion_10],
];

for (const [lvl, item] of enchants) {
  console.log(
    `Агатион +0 => Агатион +${lvl}`,
    enchant(Item.Agathion, item, 1000),
  );
}
