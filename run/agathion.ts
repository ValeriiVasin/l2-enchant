import { agathionStableEnchantMap } from '../enchant/agathion';
import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.Agathion, itemsRange(Item.Agathion_4, Item.Agathion_10), 100_000);
run(Item.Agathion_10, [Item.HighQualityAgathion], 1);
run(Item.HighQualityAgathion, itemsRange(Item.HighQualityAgathion_1, Item.HighQualityAgathion_10), 100_000);

console.log('-- Stable --');
run(Item.Agathion, itemsRange(Item.Agathion_1, Item.Agathion_10), 100_000, agathionStableEnchantMap);
