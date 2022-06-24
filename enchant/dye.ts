import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const dyeEnchantMap = new Map([
  ...createEnchantMap({
    strategy: EnchantStrategy.Safe,
    enchantItem: Item.DyePowder,
    chances: [50, 25, 20, 15, 10, 8, 6, 5, 5, 5, 5],
    items: [
      Item.Dye,
      Item.Dye_1,
      Item.Dye_2,
      Item.Dye_3,
      Item.Dye_4,
      Item.Dye_5,
      Item.Dye_6,
      Item.Dye_7,
      Item.Dye_8,
      Item.Dye_9,
      Item.Dye_10,
      Item.Dye_11,
    ],
  }),
  ...createEnchantMap({
    strategy: EnchantStrategy.Safe,
    enchantItem: Item.EnhancedDyePowder,
    chances: [10, 8, 6, 5, 4, 3, 2, 1.5, 0.5],
    items: [
      Item.Dye_11,
      Item.Dye_12,
      Item.Dye_13,
      Item.Dye_14,
      Item.Dye_15,
      Item.Dye_16,
      Item.Dye_17,
      Item.Dye_18,
      Item.Dye_19,
      Item.Dye_20,
    ],
  }),
]);
