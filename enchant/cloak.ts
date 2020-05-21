import { EnchantMap, Item } from '../types';

export const cloakEnchantMap: EnchantMap = new Map([
  [
    Item.Cloak,
    {
      item: Item.Cloak,
      required: Item.CloakEnchant,
      successRate: 70,
      success: Item.Cloak_1,
      fail: Item.Cloak,
    },
  ],
  [
    Item.Cloak_1,
    {
      item: Item.Cloak_1,
      required: Item.CloakEnchant,
      successRate: 65,
      success: Item.Cloak_2,
      fail: Item.Cloak,
    },
  ],
  [
    Item.Cloak_2,
    {
      item: Item.Cloak_2,
      required: Item.CloakEnchant,
      successRate: 58,
      success: Item.Cloak_3,
      fail: Item.Cloak_1,
    },
  ],
  [
    Item.Cloak_3,
    {
      item: Item.Cloak_3,
      required: Item.CloakEnchant,
      successRate: 42,
      success: Item.Cloak_4,
      fail: Item.Cloak_2,
    },
  ],
  [
    Item.Cloak_4,
    {
      item: Item.Cloak_4,
      required: Item.CloakEnchant,
      successRate: 32,
      success: Item.Cloak_5,
      fail: Item.Cloak_3,
    },
  ],
  [
    Item.Cloak_5,
    {
      item: Item.Cloak_5,
      required: Item.CloakEnchant,
      successRate: 32,
      success: Item.Cloak_6,
      fail: Item.Cloak_4,
    },
  ],
  [
    Item.Cloak_6,
    {
      item: Item.Cloak_6,
      required: Item.CloakEnchant,
      successRate: 48,
      success: Item.Cloak_7,
      fail: Item.Cloak_5,
    },
  ],
  [
    Item.Cloak_7,
    {
      item: Item.Cloak_7,
      required: Item.CloakEnchant,
      successRate: 28,
      success: Item.Cloak_8,
      fail: Item.Cloak_6,
    },
  ],
  [
    Item.Cloak_8,
    {
      item: Item.Cloak_8,
      required: Item.CloakEnchant,
      successRate: 28,
      success: Item.CloakE9,
      fail: Item.Cloak_7,
    },
  ],
  [
    Item.CloakE9,
    {
      item: Item.CloakE9,
      required: Item.CloakEnchant,
      successRate: 28,
      success: Item.Cloak_10,
      fail: Item.Cloak_8,
    },
  ],
]);
