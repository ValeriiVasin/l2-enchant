import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const talismanOfAuthorityEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.TalismanOfAuthorityFragment,
  chances: [70, 60, 50, 40, 50, 60, 50, 40, 30, 50, 40, 30, 20, 10, 50, 25, 20, 15, 10],
  items: itemsRange(Item.TalismanOfAuthority_1, Item.TalismanOfAuthority_20),
  boundaries: new Set([Item.TalismanOfAuthority_6, Item.TalismanOfAuthority_11, Item.TalismanOfAuthority_16]),
});
