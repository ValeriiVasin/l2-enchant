import { enchantOrNothing } from '../helpers/strategies/enchant-or-nothing';
import { Item } from '../items';

const chances = [95, 90, 85, 55, 50, 40, 33, 30, 25, 15];
const items = [
  Item.DragonBelt,
  Item.DragonBelt_1,
  Item.DragonBelt_2,
  Item.DragonBelt_3,
  Item.DragonBelt_4,
  Item.DragonBelt_5,
  Item.DragonBelt_6,
  Item.DragonBelt_7,
  Item.DragonBelt_8,
  Item.DragonBelt_9,
  Item.DragonBelt_10,
];

export const dragonBeltEnchantMap = enchantOrNothing({ items, chances });
