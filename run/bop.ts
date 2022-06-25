import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.BOP, itemsRange(Item.BOP_3, Item.BOP_16), 100_000);
