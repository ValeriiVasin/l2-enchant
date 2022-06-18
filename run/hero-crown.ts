import { run } from '../helpers/run';
import { Item } from '../items';

const times = 10_000;

run(
  Item.HeroCrown,
  [Item.HeroCrown_3, Item.HeroCrown_4, Item.HeroCrown_5, Item.HeroCrown_6, Item.HeroCrown_7, Item.HeroCrown_8],
  times,
);
