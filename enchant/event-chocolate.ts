import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const eventChocolateEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.Chocolate,
  chances: [65, 45, 40, 35, 30, 45, 38, 33, 28, 20, 28, 18, 12, 7],
  items: itemsRange(Item.ChocolateFigure_1, Item.ChocolateFigure_15),
  boundaries: new Set([Item.ChocolateFigure_6, Item.ChocolateFigure_11]),
});
