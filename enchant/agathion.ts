import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantMap, EnchantStrategy } from '../types';

export const agathionEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Destroy,
  enchantItem: Item.AgathionEnchantScroll,
  chances: [100, 100, 100, 65, 50, 35, 12, 9, 7, 4],
  items: [
    Item.Agathion,
    Item.Agathion_1,
    Item.Agathion_2,
    Item.Agathion_3,
    Item.Agathion_4,
    Item.Agathion_5,
    Item.Agathion_6,
    Item.Agathion_7,
    Item.Agathion_8,
    Item.Agathion_9,
    Item.Agathion_10,
  ],
});

export const upToHighQualityAgathion: EnchantMap = new Map([
  [
    Item.Agathion_10,
    {
      item: Item.Agathion_10,
      cost: new Map([
        [Item.Adena, 3_000_000],
        [Item.AgathionSoulStone, 1],
      ]),
      results: [{ chance: 100, item: Item.HighQualityAgathion }],
    },
  ],
]);

export const highQualityAgathionEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Safe,
  enchantItem: Item.StableScrollEnchantHighQualityAgathion,
  chances: [40, 40, 40, 30, 30, 30, 20, 20, 20, 10],
  items: [
    Item.HighQualityAgathion,
    Item.HighQualityAgathion_1,
    Item.HighQualityAgathion_2,
    Item.HighQualityAgathion_3,
    Item.HighQualityAgathion_4,
    Item.HighQualityAgathion_5,
    Item.HighQualityAgathion_6,
    Item.HighQualityAgathion_7,
    Item.HighQualityAgathion_8,
    Item.HighQualityAgathion_9,
    Item.HighQualityAgathion_10,
  ],
});
