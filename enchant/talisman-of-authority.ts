import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const talismanOfAuthorityEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.TalismanOfAuthorityFragment,
  chances: [70, 60, 50, 40, 50, 60, 50, 40, 30, 50, 30, 25, 20, 10, 50, 25, 20, 15, 10],
  items: [
    Item.TalismanOfAuthority_1,
    Item.TalismanOfAuthority_2,
    Item.TalismanOfAuthority_3,
    Item.TalismanOfAuthority_4,
    Item.TalismanOfAuthority_5,
    Item.TalismanOfAuthority_6,
    Item.TalismanOfAuthority_7,
    Item.TalismanOfAuthority_8,
    Item.TalismanOfAuthority_9,
    Item.TalismanOfAuthority_10,
    Item.TalismanOfAuthority_11,
    Item.TalismanOfAuthority_12,
    Item.TalismanOfAuthority_13,
    Item.TalismanOfAuthority_14,
    Item.TalismanOfAuthority_15,
    Item.TalismanOfAuthority_16,
    Item.TalismanOfAuthority_17,
    Item.TalismanOfAuthority_18,
    Item.TalismanOfAuthority_19,
    Item.TalismanOfAuthority_20,
  ],
  boundaries: new Set([Item.TalismanOfAuthority_6, Item.TalismanOfAuthority_11, Item.TalismanOfAuthority_16]),
});
