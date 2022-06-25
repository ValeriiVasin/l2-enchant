import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { mergeEnchantMaps } from '../helpers/merge-enchants';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const dyeEnchantMap = mergeEnchantMaps([
  createEnchantMap({
    strategy: EnchantStrategy.Safe,
    enchantItem: Item.DyePowder,
    chances: [50, 25, 20, 15, 10, 8, 6, 5, 5, 5, 5],
    items: itemsRange(Item.Dye, Item.Dye_11),
  }),
  createEnchantMap({
    strategy: EnchantStrategy.Safe,
    enchantItem: Item.EnhancedDyePowder,
    chances: [10, 8, 6, 5, 4, 3, 2, 1.5, 0.5],
    items: itemsRange(Item.Dye_11, Item.Dye_20),
  }),
]);
