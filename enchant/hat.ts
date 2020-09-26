import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

const chances = [100, 100, 100, 50, 40, 40, 8, 8, 5, 2];
const items = [
  Item.Hat,
  Item.Hat_1,
  Item.Hat_2,
  Item.Hat_3,
  Item.Hat_4,
  Item.Hat_5,
  Item.Hat_6,
  Item.Hat_7,
  Item.Hat_8,
  Item.Hat_9,
  Item.Hat_10,
];

export const hatEnchantMap = createEnchantMap({
  chances,
  items,
  enchantItem: Item.EvaScrollEnchantHairAccessory,
  strategy: EnchantStrategy.Destroy,
});
