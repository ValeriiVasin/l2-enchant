export enum Item {
  Cloak = 'Плащ',
  Cloak_1 = 'Плащ +1',
  Cloak_2 = 'Плащ +2',
  Cloak_3 = 'Плащ +3',
  Cloak_4 = 'Плащ +4',
  Cloak_5 = 'Плащ +5',
  Cloak_6 = 'Плащ +6',
  Cloak_7 = 'Плащ +7',
  Cloak_8 = 'Плащ +8',
  CloakE9 = 'Плащ +9',
  Cloak_10 = 'Плащ +10',

  Adena = 'Адена',

  TalismanOfAden = 'Талисман Адена',
  TalismanOfAden_1 = 'Талисман Адена +1',
  TalismanOfAden_2 = 'Талисман Адена +2',
  TalismanOfAden_3 = 'Талисман Адена +3',
  TalismanOfAden_4 = 'Талисман Адена +4',
  TalismanOfAden_5 = 'Талисман Адена +5',
  TalismanOfAden_6 = 'Талисман Адена +6',
  TalismanOfAden_7 = 'Талисман Адена +7',
  TalismanOfAden_8 = 'Талисман Адена +8',
  TalismanOfAden_9 = 'Талисман Адена +9',
  TalismanOfAden_10 = 'Талисман Адена +10',

  CloakEnchant = 'Свиток: Модифицировать Плащ',
}

export interface Enchant {
  item: Item;
  successRate: number;
  required: Item;
  success: Item;
  fail: Item;
}

export type EnchantMap = Map<Item, Enchant>;
