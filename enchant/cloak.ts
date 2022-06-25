import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

// https://l2central.info/classic/items/accessary/cloaks/
export const cloakEnchantMap = new Map([
  ...createEnchantMap({
    strategy: EnchantStrategy.Decrease,
    enchantItem: Item.ScrollEnchantCloak,
    chances: [70, 65, 58, 42, 32, 32, 48, 28, 28, 28],
    items: itemsRange(Item.Cloak, Item.Cloak_10),
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
    items: itemsRange(Item.LegendaryCloak_10, Item.LegendaryCloak_15),
  }),

  ...createEnchantMap({
    strategy: EnchantStrategy.Safe,
    enchantItem: Item.StableScrollHighQualityEnchantLegendaryCloak,
    chances: [7, 7, 5, 5, 3],
    items: itemsRange(Item.LegendaryCloak_15, Item.LegendaryCloak_20),
  }),
]);
