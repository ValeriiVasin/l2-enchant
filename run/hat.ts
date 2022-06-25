import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.Hat, itemsRange(Item.Hat_4, Item.Hat_7), 100_000);
