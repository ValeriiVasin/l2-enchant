import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const dragonPendantEnchantMap = new Map([
  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.DragonVarnish,
    chances: [100, 90, 80, 70, 70],
    items: [
      Item.DragonPendantOne,
      Item.DragonPendantOne_1,
      Item.DragonPendantOne_2,
      Item.DragonPendantOne_3,
      Item.DragonPendantOne_4,
      Item.DragonPendantOne_5,
    ],
  }),

  [
    Item.DragonPendantOne_5,
    {
      item: Item.DragonPendantOne_5,
      cost: new Map([[Item.Adena, 12_000_000]]),
      results: [{ chance: 100, item: Item.DragonPendantTwo }],
    },
  ],

  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.DragonVarnish,
    chances: [100, 80, 70, 60, 30],
    items: [
      Item.DragonPendantTwo,
      Item.DragonPendantTwo_1,
      Item.DragonPendantTwo_2,
      Item.DragonPendantTwo_3,
      Item.DragonPendantTwo_4,
      Item.DragonPendantTwo_5,
    ],
  }),

  [
    Item.DragonPendantTwo_5,
    {
      item: Item.DragonPendantTwo_5,
      cost: new Map([
        [Item.Adena, 16_000_000],
        [Item.DragonVarnish, 3],
      ]),
      results: [{ chance: 100, item: Item.DragonPendantThree }],
    },
  ],

  ...createEnchantMap({
    strategy: EnchantStrategy.Drop,
    enchantItem: Item.DragonVarnish,
    chances: [70, 50, 30, 12, 5],
    items: [
      Item.DragonPendantThree,
      Item.DragonPendantThree_1,
      Item.DragonPendantThree_2,
      Item.DragonPendantThree_3,
      Item.DragonPendantThree_4,
      Item.DragonPendantThree_5,
    ],
  }),
]);
