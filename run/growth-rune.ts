import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.GrowthRune_1, itemsRange(Item.GrowthRune_2, Item.GrowthRune_15), 100_000);
