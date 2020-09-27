import { runWithResolution } from '../helpers/run-with-resolution';
import { Item } from '../items';

runWithResolution(
  Item.Brooch_1,
  [Item.Brooch_2, Item.Brooch_3, Item.Brooch_4, Item.Brooch_5],
  1000,
);
