import { talismanOfMagmeldEnchantMap } from '../enchant/talisman-of-magmeld';
import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(
  Item.TalismanOfMagmeld_1,
  itemsRange(Item.TalismanOfMagmeld_2, Item.TalismanOfMagmeld_30),
  100_000,
  talismanOfMagmeldEnchantMap,
);
