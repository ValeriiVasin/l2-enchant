import { EnchantMap, Item, Enchant } from '../types';

const oneChances = [100, 90, 80, 70, 70];
const oneItems = [
  Item.DragonPendantOne,
  Item.DragonPendantOne_1,
  Item.DragonPendantOne_2,
  Item.DragonPendantOne_3,
  Item.DragonPendantOne_4,
  Item.DragonPendantOne_5,
];

export const dragonPendantOneEnchantMap: EnchantMap = new Map([
  ...oneItems.slice(0, -1).map((item, index): [Item, Enchant] => [
    item,
    {
      item,
      required: Item.DragonVarnish,
      successRate: oneChances[index],
      success: oneItems[index + 1],
      fail: oneItems[0],
    },
  ]),
]);
