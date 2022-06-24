import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

// https://l2central.info/classic/items/accessary/cloaks/
export const cloakEnchantMap = new Map([
  ...createEnchantMap({
    strategy: EnchantStrategy.Decrease,
    enchantItem: Item.ScrollEnchantCloak,
    chances: [70, 65, 58, 42, 32, 32, 48, 28, 28, 28],
    items: [
      Item.Cloak,
      Item.Cloak_1,
      Item.Cloak_2,
      Item.Cloak_3,
      Item.Cloak_4,
      Item.Cloak_5,
      Item.Cloak_6,
      Item.Cloak_7,
      Item.Cloak_8,
      Item.Cloak_9,
      Item.Cloak_10,
    ],
  }),

  ...createEnchantMap({
    strategy: EnchantStrategy.Safe,
    enchantItem: Item.LegendaryScroll,
    chances: [5],
    items: [Item.Cloak_10, Item.LegendaryCloak_10],
  }),

  ...createEnchantMap({
    strategy: EnchantStrategy.Safe,
    enchantItem: Item.StableScrollEnchantLegendaryCloak,
    chances: [28, 28, 48, 48, 20],
    items: [
      Item.LegendaryCloak_10,
      Item.LegendaryCloak_11,
      Item.LegendaryCloak_12,
      Item.LegendaryCloak_13,
      Item.LegendaryCloak_14,
      Item.LegendaryCloak_15,
    ],
  }),

  ...createEnchantMap({
    strategy: EnchantStrategy.Safe,
    enchantItem: Item.StableScrollHighQualityEnchantLegendaryCloak,
    chances: [7, 7, 5, 5, 3],
    items: [
      Item.LegendaryCloak_15,
      Item.LegendaryCloak_16,
      Item.LegendaryCloak_17,
      Item.LegendaryCloak_18,
      Item.LegendaryCloak_19,
      Item.LegendaryCloak_20,
    ],
  }),
]);
