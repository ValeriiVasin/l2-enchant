import { runWithResolution } from '../helpers/run-with-resolution';
import { Item } from '../items';

runWithResolution(
  Item.Ruby_1,
  [Item.Ruby_2, Item.Ruby_3, Item.Ruby_4, Item.Ruby_5],
  100_000,
);
