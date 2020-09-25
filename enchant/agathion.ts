import { enchantOrNothing } from '../helpers/strategies/enchant-or-nothing';
import { Item } from '../items';

const chances = [100, 100, 100, 65, 50, 35, 12, 9, 7, 4];
const items = [
  Item.Agathion,
  Item.Agathion_1,
  Item.Agathion_2,
  Item.Agathion_3,
  Item.Agathion_4,
  Item.Agathion_5,
  Item.Agathion_6,
  Item.Agathion_7,
  Item.Agathion_8,
  Item.Agathion_9,
  Item.Agathion_10,
];

export const agathionEnchantMap = enchantOrNothing({
  chances,
  items,
  enchantItem: Item.AgathionEnchantScroll,
});
