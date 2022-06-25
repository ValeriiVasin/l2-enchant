import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.Benir_1, itemsRange(Item.Benir_2, Item.Benir_25), 100_000);
