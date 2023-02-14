import { rubySuperiorEnchantMap } from '../enchant/ruby-superior';
import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.RubySuperior_1, itemsRange(Item.RubySuperior_2, Item.RubySuperior_5), 100_000, rubySuperiorEnchantMap);
