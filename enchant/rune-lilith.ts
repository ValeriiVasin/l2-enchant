import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

const items = [
  Item.LilithRune_1,
  Item.LilithRune_2,
  Item.LilithRune_3,
  Item.LilithRune_4,
  Item.LilithRune_5,
  Item.LilithRune_6,
  Item.LilithRune_7,
  Item.LilithRune_8,
  Item.LilithRune_9,
  Item.LilithRune_10,
];

const chances = [95, 95, 95, 95, 50, 50, 50, 30, 30];

export const runeLilithEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.TwoToOne,
  items,
  chances,
});
