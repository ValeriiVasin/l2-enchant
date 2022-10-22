import { rubyBigEnchantMap } from '../enchant/ruby-big';
import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.RubyBig_1, itemsRange(Item.RubyBig_2, Item.RubyBig_5), 100_000, rubyBigEnchantMap);
