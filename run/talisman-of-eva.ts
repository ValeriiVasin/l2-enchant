import { talismanOfEvaEnchantMap } from '../enchant/talisman-of-eva';
import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.TalismanOfEva, itemsRange(Item.TalismanOfEva_2, Item.TalismanOfEva_10), 100_000, talismanOfEvaEnchantMap);
