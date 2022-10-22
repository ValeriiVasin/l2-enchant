import { runeAdenEnchantMap } from '../enchant/rune-aden';
import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.RuneAden_1, itemsRange(Item.RuneAden_2, Item.RuneAden_20), 100_000, runeAdenEnchantMap);
