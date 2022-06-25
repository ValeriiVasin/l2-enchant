import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.RuneHardin_1, itemsRange(Item.RuneHardin_2, Item.RuneHardin_20), 100_000);
