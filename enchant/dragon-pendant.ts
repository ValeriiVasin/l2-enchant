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

const twoChances = [100, 80, 70, 60, 30];
const twoItems = [
  Item.DragonPendantTwo,
  Item.DragonPendantTwo_1,
  Item.DragonPendantTwo_2,
  Item.DragonPendantTwo_3,
  Item.DragonPendantTwo_4,
  Item.DragonPendantTwo_5,
];

const threeChances = [70, 30, 10, 5, 2];
const threeItems = [
  Item.DragonPendantThree,
  Item.DragonPendantThree_1,
  Item.DragonPendantThree_2,
  Item.DragonPendantThree_3,
  Item.DragonPendantThree_4,
  Item.DragonPendantThree_5,
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

export const dragonPendantTwoEnchantMap: EnchantMap = new Map([
  ...twoItems.slice(0, -1).map((item, index): [Item, Enchant] => [
    item,
    {
      item,
      required: Item.DragonVarnish,
      successRate: twoChances[index],
      success: twoItems[index + 1],
      fail: twoItems[0],
    },
  ]),
]);

export const dragonPendantThreeEnchantMap: EnchantMap = new Map([
  ...threeItems.slice(0, -1).map((item, index): [Item, Enchant] => [
    item,
    {
      item,
      required: Item.DragonVarnish,
      successRate: threeChances[index],
      success: threeItems[index + 1],
      fail: threeItems[0],
    },
  ]),
]);
