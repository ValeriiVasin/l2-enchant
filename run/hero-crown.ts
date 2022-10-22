import { heroCrownEnchantMap } from '../enchant/hero-crown';
import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.HeroCrown, itemsRange(Item.HeroCrown_2, Item.HeroCrown_10), 100_000, heroCrownEnchantMap);
