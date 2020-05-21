export enum Item {
  FerritCloak = 'Плащ Феррита',
  FerritCloakE1 = 'Плащ Феррита +1',
  FerritCloakE2 = 'Плащ Феррита +2',
  FerritCloakE3 = 'Плащ Феррита +3',
  FerritCloakE4 = 'Плащ Феррита +4',
  FerritCloakE5 = 'Плащ Феррита +5',
  FerritCloakE6 = 'Плащ Феррита +6',
  FerritCloakE7 = 'Плащ Феррита +7',
  FerritCloakE8 = 'Плащ Феррита +8',
  FerritCloakE9 = 'Плащ Феррита +9',
  FerritCloakE10 = 'Плащ Феррита +10',

  CloakEnchant = 'Свиток: Модифицировать Плащ',
}

export interface EnchantedItem {
  item: Item;
  enchant: number;
}

export interface Enchant {
  item: Item;
  successRate: number;
  required: Item;
  success: Item;
  fail: Item;
}

export type EnchantMap = Map<Item, Enchant>;
