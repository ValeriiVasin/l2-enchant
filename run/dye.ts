import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.Dye, itemsRange(Item.Dye_1, Item.Dye_20), 100_000);
