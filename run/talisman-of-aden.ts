import { talismanOfAdenEnchantMap } from '../enchant/talisman-of-aden';
import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.TalismanOfAden, itemsRange(Item.TalismanOfAden_1, Item.TalismanOfAden_10), 100_000, talismanOfAdenEnchantMap);
