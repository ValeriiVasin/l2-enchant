import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(
  Item.Cloak,
  [...itemsRange(Item.Cloak_1, Item.Cloak_10), ...itemsRange(Item.LegendaryCloak_10, Item.LegendaryCloak_15)],
  100_000,
);
