import { enchantOrNothing } from '../helpers/strategies/enchant-or-nothing';
import { Item } from '../items';

const chances = [60, 50, 40, 35, 30, 28, 26, 24, 22, 20];
const items = [
  Item.HeroCrown,
  Item.HeroCrown_1,
  Item.HeroCrown_2,
  Item.HeroCrown_3,
  Item.HeroCrown_4,
  Item.HeroCrown_5,
  Item.HeroCrown_6,
  Item.HeroCrown_7,
  Item.HeroCrown_8,
  Item.HeroCrown_9,
  Item.HeroCrown_10,
];

export const heroCrownEnchantMap = enchantOrNothing({ items, chances });
