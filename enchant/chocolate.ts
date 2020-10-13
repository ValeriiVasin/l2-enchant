import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const chocolateEnchantMap = new Map([
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.Chocolate,
    items: [
      Item.ChocolateFigure_1,
      Item.ChocolateFigure_2,
      Item.ChocolateFigure_3,
      Item.ChocolateFigure_4,
      Item.ChocolateFigure_5,
      Item.ChocolateFigure_6,
    ],
    chances: [65, 45, 40, 35, 30],
  }),
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.Chocolate,
    items: [
      Item.ChocolateFigure_6,
      Item.ChocolateFigure_7,
      Item.ChocolateFigure_8,
      Item.ChocolateFigure_9,
      Item.ChocolateFigure_10,
      Item.ChocolateFigure_11,
    ],
    chances: [45, 38, 33, 28, 20],
  }),
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.Chocolate,
    items: [
      Item.ChocolateFigure_11,
      Item.ChocolateFigure_12,
      Item.ChocolateFigure_13,
      Item.ChocolateFigure_14,
      Item.ChocolateFigure_15,
    ],
    chances: [28, 18, 12, 7],
  }),
]);
