import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.IgnisNecklace, itemsRange(Item.IgnisNecklace_1, Item.IgnisNecklace_10), 100_000);
