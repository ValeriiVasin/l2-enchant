import { EnchantMap, Item } from './types';

export const enchants: EnchantMap = new Map([
  [
    Item.FerritCloak,
    {
      item: Item.FerritCloak,
      required: Item.CloakEnchant,
      successRate: 70,
      success: Item.FerritCloakE1,
      fail: Item.FerritCloak,
    },
  ],
  [
    Item.FerritCloakE1,
    {
      item: Item.FerritCloakE1,
      required: Item.CloakEnchant,
      successRate: 65,
      success: Item.FerritCloakE2,
      fail: Item.FerritCloak,
    },
  ],
  [
    Item.FerritCloakE2,
    {
      item: Item.FerritCloakE2,
      required: Item.CloakEnchant,
      successRate: 58,
      success: Item.FerritCloakE3,
      fail: Item.FerritCloakE1,
    },
  ],
  [
    Item.FerritCloakE3,
    {
      item: Item.FerritCloakE3,
      required: Item.CloakEnchant,
      successRate: 42,
      success: Item.FerritCloakE4,
      fail: Item.FerritCloakE2,
    },
  ],
  [
    Item.FerritCloakE4,
    {
      item: Item.FerritCloakE4,
      required: Item.CloakEnchant,
      successRate: 32,
      success: Item.FerritCloakE5,
      fail: Item.FerritCloakE3,
    },
  ],
  [
    Item.FerritCloakE5,
    {
      item: Item.FerritCloakE5,
      required: Item.CloakEnchant,
      successRate: 32,
      success: Item.FerritCloakE6,
      fail: Item.FerritCloakE4,
    },
  ],
  [
    Item.FerritCloakE6,
    {
      item: Item.FerritCloakE6,
      required: Item.CloakEnchant,
      successRate: 48,
      success: Item.FerritCloakE7,
      fail: Item.FerritCloakE5,
    },
  ],
  [
    Item.FerritCloakE7,
    {
      item: Item.FerritCloakE7,
      required: Item.CloakEnchant,
      successRate: 28,
      success: Item.FerritCloakE8,
      fail: Item.FerritCloakE6,
    },
  ],
  [
    Item.FerritCloakE8,
    {
      item: Item.FerritCloakE8,
      required: Item.CloakEnchant,
      successRate: 28,
      success: Item.FerritCloakE9,
      fail: Item.FerritCloakE7,
    },
  ],
  [
    Item.FerritCloakE9,
    {
      item: Item.FerritCloakE9,
      required: Item.CloakEnchant,
      successRate: 28,
      success: Item.FerritCloakE10,
      fail: Item.FerritCloakE8,
    },
  ],
]);
