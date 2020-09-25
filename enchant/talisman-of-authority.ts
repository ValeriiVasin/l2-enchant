import { Item } from '../items';
import { Enchant, EnchantMap } from '../types';

const oneChances = [70, 60, 50, 40];
const oneItems = [
  Item.TalismanOfAuthority_1,
  Item.TalismanOfAuthority_2,
  Item.TalismanOfAuthority_3,
  Item.TalismanOfAuthority_4,
  Item.TalismanOfAuthority_5,
];

const twoChances = [45, 35, 25, 20];
const twoItems = [
  Item.NobleTalismanOfAuthority_1,
  Item.NobleTalismanOfAuthority_2,
  Item.NobleTalismanOfAuthority_3,
  Item.NobleTalismanOfAuthority_4,
  Item.NobleTalismanOfAuthority_5,
];

const threeChances = [30, 25, 20, 10];
const threeItems = [
  Item.RadiantTalismanOfAuthority_1,
  Item.RadiantTalismanOfAuthority_2,
  Item.RadiantTalismanOfAuthority_3,
  Item.RadiantTalismanOfAuthority_4,
  Item.RadiantTalismanOfAuthority_5,
];

export const talismanOfAuthorityEnchantMap: EnchantMap = new Map([
  ...oneItems.slice(0, -1).map((item, index): [Item, Enchant] => [
    item,
    {
      item,
      required: Item.TalismanOfAuthorityFragment,
      successRate: oneChances[index],
      success: oneItems[index + 1],
      fail: oneItems[0],
    },
  ]),
]);

export const nobleTalismanOfAuthorityEnchantMap: EnchantMap = new Map([
  ...twoItems.slice(0, -1).map((item, index): [Item, Enchant] => [
    item,
    {
      item,
      required: Item.TalismanOfAuthorityFragment,
      successRate: twoChances[index],
      success: twoItems[index + 1],
      fail: twoItems[0],
    },
  ]),
]);

export const radiantTalismanOfAuthorityEnchantMap: EnchantMap = new Map([
  ...threeItems.slice(0, -1).map((item, index): [Item, Enchant] => [
    item,
    {
      item,
      required: Item.TalismanOfAuthorityFragment,
      successRate: threeChances[index],
      success: threeItems[index + 1],
      fail: threeItems[0],
    },
  ]),
]);
