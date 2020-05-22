export enum Item {
  Nothing = 'Nothing',
  Adena = 'Адена',

  Cloak = 'Плащ',
  Cloak_1 = 'Плащ +1',
  Cloak_2 = 'Плащ +2',
  Cloak_3 = 'Плащ +3',
  Cloak_4 = 'Плащ +4',
  Cloak_5 = 'Плащ +5',
  Cloak_6 = 'Плащ +6',
  Cloak_7 = 'Плащ +7',
  Cloak_8 = 'Плащ +8',
  Cloak_9 = 'Плащ +9',
  Cloak_10 = 'Плащ +10',

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

  TalismanOfEva = 'Талисман Евы',
  TalismanOfEva_1 = 'Талисман Евы +1',
  TalismanOfEva_2 = 'Талисман Евы +2',
  TalismanOfEva_3 = 'Талисман Евы +3',
  TalismanOfEva_4 = 'Талисман Евы +4',
  TalismanOfEva_5 = 'Талисман Евы +5',
  TalismanOfEva_6 = 'Талисман Евы +6',
  TalismanOfEva_7 = 'Талисман Евы +7',
  TalismanOfEva_8 = 'Талисман Евы +8',
  TalismanOfEva_9 = 'Талисман Евы +9',
  TalismanOfEva_10 = 'Талисман Евы +10',

  DragonEssence = 'Эссенция Дракона',
  DragonVarnish = 'Лак Дракона',
  DragonPendantOne = 'Подвеска Дракона Ур.1',
  DragonPendantOne_1 = 'Подвеска Дракона Ур.1 +1',
  DragonPendantOne_2 = 'Подвеска Дракона Ур.1 +2',
  DragonPendantOne_3 = 'Подвеска Дракона Ур.1 +3',
  DragonPendantOne_4 = 'Подвеска Дракона Ур.1 +4',
  DragonPendantOne_5 = 'Подвеска Дракона Ур.1 +5',

  DragonPendantTwo = 'Подвеска Дракона Ур.2',
  DragonPendantTwo_1 = 'Подвеска Дракона Ур.2 +1',
  DragonPendantTwo_2 = 'Подвеска Дракона Ур.2 +2',
  DragonPendantTwo_3 = 'Подвеска Дракона Ур.2 +3',
  DragonPendantTwo_4 = 'Подвеска Дракона Ур.2 +4',
  DragonPendantTwo_5 = 'Подвеска Дракона Ур.2 +5',

  DragonPendantThree = 'Подвеска Дракона Ур.3',
  DragonPendantThree_1 = 'Подвеска Дракона Ур.3 +1',
  DragonPendantThree_2 = 'Подвеска Дракона Ур.3 +2',
  DragonPendantThree_3 = 'Подвеска Дракона Ур.3 +3',
  DragonPendantThree_4 = 'Подвеска Дракона Ур.3 +4',
  DragonPendantThree_5 = 'Подвеска Дракона Ур.3 +5',

  DragonPendantFour = 'Подвеска Дракона Ур.4',
  DragonPendantFour_1 = 'Подвеска Дракона Ур.4 +1',
  DragonPendantFour_2 = 'Подвеска Дракона Ур.4 +2',
  DragonPendantFour_3 = 'Подвеска Дракона Ур.4 +3',
  DragonPendantFour_4 = 'Подвеска Дракона Ур.4 +4',
  DragonPendantFour_5 = 'Подвеска Дракона Ур.4 +5',

  CloakEnchant = 'Свиток: Модифицировать Плащ',
}

export interface Enchant {
  item: Item;
  successRate: number;
  required: Item;
  success: Item;
  fail: Item;
}

interface CountableItem {
  item: Item;
  count: number;
}

export type EnchantMap = Map<Item, Enchant>;
