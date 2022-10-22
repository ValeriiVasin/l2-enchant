import { dragonBeltEnchantMap } from '../enchant/dragon-belt';
import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.DragonBelt, itemsRange(Item.DragonBelt_1, Item.DragonBelt_10), 100_000, dragonBeltEnchantMap);
