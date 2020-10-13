import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

const chances = [65, 45, 40, 35, 30];

const items = [
  Item.ChocolateFigure_1,
  Item.ChocolateFigure_2,
  Item.ChocolateFigure_3,
  Item.ChocolateFigure_4,
  Item.ChocolateFigure_5,
  Item.ChocolateFigure_6,
];

export const chocolateEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.Chocolate,
  items,
  chances,
});
