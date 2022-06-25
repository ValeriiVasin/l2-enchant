import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.Ruby_1, itemsRange(Item.Ruby_2, Item.Ruby_5), 100_000);
