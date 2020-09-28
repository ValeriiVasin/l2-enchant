import { run } from '../helpers/run';
import { Item } from '../items';

const times = 10_000;

run(
  Item.TalismanOfAden,
  [
    Item.TalismanOfAden_1,
    Item.TalismanOfAden_2,
    Item.TalismanOfAden_3,
    Item.TalismanOfAden_4,
    Item.TalismanOfAden_5,
    Item.TalismanOfAden_6,
    Item.TalismanOfAden_7,
    Item.TalismanOfAden_8,
  ],
  times,
);
