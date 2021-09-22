import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantMap, EnchantStrategy } from '../types';

export const runeEnchantMap: EnchantMap = new Map([
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.Rune_1,
    items: [
      Item.Rune_1,
      Item.Rune_2,
      Item.Rune_3,
      Item.Rune_4,
      Item.Rune_5,
      Item.Rune_6,
    ],
    chances: [70, 60, 50, 40, 60],
  }),
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.Rune_1,
    items: [
      Item.Rune_6,
      Item.Rune_7,
      Item.Rune_8,
      Item.Rune_9,
      Item.Rune_10,
      Item.Rune_11,
    ],
    chances: [55, 50, 45, 40, 50],
  }),
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.Rune_1,
    items: [
      Item.Rune_11,
      Item.Rune_12,
      Item.Rune_13,
      Item.Rune_14,
      Item.Rune_15,
      Item.Rune_16,
    ],
    chances: [45, 40, 35, 30, 30],
  }),
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.Rune_1,
    items: [
      Item.Rune_16,
      Item.Rune_17,
      Item.Rune_18,
      Item.Rune_19,
      Item.Rune_20,
    ],
    chances: [25, 20, 15, 10],
  }),
]);
