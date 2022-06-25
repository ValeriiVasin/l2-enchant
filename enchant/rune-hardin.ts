import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const runeHardinEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.RuneHardin_1,
  chances: [60, 55, 50, 45, 45, 40, 35, 30, 25, 35, 30, 25, 20, 15, 25, 20, 15, 10, 5],
  items: [
    Item.RuneHardin_1,
    Item.RuneHardin_2,
    Item.RuneHardin_3,
    Item.RuneHardin_4,
    Item.RuneHardin_5,
    Item.RuneHardin_6,
    Item.RuneHardin_7,
    Item.RuneHardin_8,
    Item.RuneHardin_9,
    Item.RuneHardin_10,
    Item.RuneHardin_11,
    Item.RuneHardin_12,
    Item.RuneHardin_13,
    Item.RuneHardin_14,
    Item.RuneHardin_15,
    Item.RuneHardin_16,
    Item.RuneHardin_17,
    Item.RuneHardin_18,
    Item.RuneHardin_19,
    Item.RuneHardin_20,
  ],
  boundaries: new Set([Item.RuneHardin_6, Item.RuneHardin_11, Item.RuneHardin_16]),
});
