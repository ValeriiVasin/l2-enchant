import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

// https://l2central.info/classic/items/accessary/bracelet/talisman/#talmagm
export const talismanOfMagmeldEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.MagmeldFragment,
  chances: [
    60, 55, 50, 40, 50, 45, 40, 35, 30, 50, 45, 40, 40, 35, 30, 25, 50, 35, 30, 25, 20, 15, 50, 35, 25, 20, 15, 10, 30,
  ],
  items: itemsRange(Item.TalismanOfMagmeld_1, Item.TalismanOfMagmeld_30),
  boundaries: new Set([
    Item.TalismanOfMagmeld_6,
    Item.TalismanOfMagmeld_12,
    Item.TalismanOfMagmeld_18,
    Item.TalismanOfMagmeld_24,
  ]),
});
