import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import type { EnchantMap } from '../types';
import { EnchantStrategy } from '../types';

export const agathionEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Destroy,
  enchantItem: Item.AgathionEnchantScroll,
  chances: [100, 100, 100, 65, 50, 35, 12, 9, 7, 4],
  items: itemsRange(Item.Agathion, Item.Agathion_10),
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
  items: itemsRange(Item.HighQualityAgathion, Item.HighQualityAgathion_10),
});
