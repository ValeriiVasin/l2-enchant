import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

// Chances 10+:
// https://discord.com/channels/351703230499258372/351703230499258373/988409582667845672
// Chances below 10 were verified in-game

export const growthRuneEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.GrowthRuneFragment,
  chances: [70, 60, 50, 40, 30, 50, 40, 30, 20, 20, 30, 20, 15, 10],
  items: itemsRange(Item.GrowthRune_1, Item.GrowthRune_15),
  boundaries: new Set([Item.GrowthRune_6, Item.GrowthRune_11]),
});
