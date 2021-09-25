import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantMap, EnchantStrategy } from '../types';

export const runeAdenEnchantMap: EnchantMap = new Map([
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.RuneAden_1,
    items: [
      Item.RuneAden_1,
      Item.RuneAden_2,
      Item.RuneAden_3,
      Item.RuneAden_4,
      Item.RuneAden_5,
      Item.RuneAden_6,
    ],
    chances: [70, 60, 50, 40, 60],
  }),
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.RuneAden_1,
    items: [
      Item.RuneAden_6,
      Item.RuneAden_7,
      Item.RuneAden_8,
      Item.RuneAden_9,
      Item.RuneAden_10,
      Item.RuneAden_11,
    ],
    chances: [55, 50, 45, 40, 50],
  }),
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.RuneAden_1,
    items: [
      Item.RuneAden_11,
      Item.RuneAden_12,
      Item.RuneAden_13,
      Item.RuneAden_14,
      Item.RuneAden_15,
      Item.RuneAden_16,
    ],
    chances: [45, 40, 35, 30, 30],
  }),
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.RuneAden_1,
    items: [
      Item.RuneAden_16,
      Item.RuneAden_17,
      Item.RuneAden_18,
      Item.RuneAden_19,
      Item.RuneAden_20,
    ],
    chances: [25, 20, 15, 10],
  }),
]);
