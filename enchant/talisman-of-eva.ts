import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const talismanOfEvaEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Destroy,
  chances: [60, 50, 40, 35, 30, 28, 26, 24, 22, 20],
  items: itemsRange(Item.TalismanOfEva, Item.TalismanOfEva_10),
});
