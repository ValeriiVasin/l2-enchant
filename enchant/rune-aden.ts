import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const runeAdenEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.RuneAden_1,
  chances: [70, 60, 50, 40, 60, 55, 50, 45, 40, 50, 45, 40, 35, 30, 30, 25, 20, 15, 10],
  items: [
    Item.RuneAden_1,
    Item.RuneAden_2,
    Item.RuneAden_3,
    Item.RuneAden_4,
    Item.RuneAden_5,
    Item.RuneAden_6,
    Item.RuneAden_7,
    Item.RuneAden_8,
    Item.RuneAden_9,
    Item.RuneAden_10,
    Item.RuneAden_11,
    Item.RuneAden_12,
    Item.RuneAden_13,
    Item.RuneAden_14,
    Item.RuneAden_15,
    Item.RuneAden_16,
    Item.RuneAden_17,
    Item.RuneAden_18,
    Item.RuneAden_19,
    Item.RuneAden_20,
  ],
  boundaries: new Set([Item.RuneAden_6, Item.RuneAden_11, Item.RuneAden_16]),
});
