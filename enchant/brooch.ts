import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

const chances = [25, 25, 25, 25];

const items = [
  Item.Brooch_1,
  Item.Brooch_2,
  Item.Brooch_3,
  Item.Brooch_4,
  Item.Brooch_5,
];

export const broochEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.TwoToOne,
  items,
  chances,
});
