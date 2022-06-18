import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

// same chances:
// https://dev.l2central.info/essence/items/accessary/talisman/
export const benirEnchantMap = new Map([
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.BenirEnchantItem,
    items: [Item.Benir_1, Item.Benir_2, Item.Benir_3, Item.Benir_4, Item.Benir_5, Item.Benir_6],
    chances: [50, 45, 40, 35, 50],
  }),
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.BenirEnchantItem,
    items: [Item.Benir_6, Item.Benir_7, Item.Benir_8, Item.Benir_9, Item.Benir_10, Item.Benir_11, Item.Benir_12],
    chances: [45, 40, 35, 30, 25, 50],
  }),
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.BenirEnchantItem,
    items: [Item.Benir_12, Item.Benir_13, Item.Benir_14, Item.Benir_15, Item.Benir_16, Item.Benir_17, Item.Benir_18],
    chances: [35, 30, 25, 20, 15, 50],
  }),
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.BenirEnchantItem,
    items: [Item.Benir_18, Item.Benir_19, Item.Benir_20, Item.Benir_21, Item.Benir_22, Item.Benir_23, Item.Benir_24],
    chances: [35, 30, 25, 20, 15, 50],
  }),
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.BenirEnchantItem,
    items: [Item.Benir_24, Item.Benir_25],
    chances: [35],
  }),
]);
