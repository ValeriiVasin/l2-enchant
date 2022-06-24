import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

// https://l2central.info/classic/items/accessary/cloaks/
const chances = [70, 65, 58, 42, 32, 32, 48, 28, 28, 28];
const items = [
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
];

export const cloakEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Decrease,
  items,
  chances,
  enchantItem: Item.CloakEnchant,
});
