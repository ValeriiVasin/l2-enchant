import { broochEnchantMap } from '../enchant/brooch';
import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.Brooch_1, itemsRange(Item.Brooch_2, Item.Brooch_5), 100_000, broochEnchantMap);
