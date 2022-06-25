import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const talismanOfAdenEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Destroy,
  chances: [100, 80, 70, 60, 40, 30, 24, 16, 10, 10],
  items: itemsRange(Item.TalismanOfAden, Item.TalismanOfAden_10),
});
