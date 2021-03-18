import { runWithResolution } from '../helpers/run-with-resolution';
import { Item } from '../items';

runWithResolution(
  Item.RubyBig_1,
  [Item.RubyBig_2, Item.RubyBig_3, Item.RubyBig_4, Item.RubyBig_5],
  10_000,
);
