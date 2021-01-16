import { run } from '../helpers/run';
import { Item } from '../items';

const times = 100_000;

run(
  Item.DragonBelt,
  [
    Item.DragonBelt_1,
    Item.DragonBelt_2,
    Item.DragonBelt_3,
    Item.DragonBelt_4,
    Item.DragonBelt_5,
    Item.DragonBelt_6,
    Item.DragonBelt_7,
    Item.DragonBelt_8,
    Item.DragonBelt_9,
    Item.DragonBelt_10,
  ],
  times,
);
