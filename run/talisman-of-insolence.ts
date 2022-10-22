import { talismanOfInsolenceEnchantMap } from '../enchant/talisman-of-insolence';
import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(
  Item.TalismanOfInsolence_1,
  itemsRange(Item.TalismanOfInsolence_2, Item.TalismanOfInsolence_6),
  100_000,
  talismanOfInsolenceEnchantMap,
);
