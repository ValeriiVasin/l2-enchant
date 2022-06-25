import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.TalismanOfAuthority_1, itemsRange(Item.TalismanOfAuthority_2, Item.TalismanOfAuthority_20), 100_000);
