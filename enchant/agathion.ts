import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { mergeEnchantMaps } from '../helpers/merge-enchants';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

const chances = [100, 100, 100, 65, 50, 35, 12, 9, 7, 4];

export const agathionEnchantMap = mergeEnchantMaps([
  createEnchantMap({
    strategy: EnchantStrategy.Destroy,
    enchantItem: Item.AgathionEnchantScroll,
    chances,
    items: itemsRange(Item.Agathion, Item.Agathion_10),
  }),
  new Map([
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
  ]),
  createEnchantMap({
    strategy: EnchantStrategy.Safe,
    enchantItem: Item.StableScrollEnchantHighQualityAgathion,
    chances: [40, 40, 40, 30, 30, 30, 20, 20, 20, 10],
    items: itemsRange(Item.HighQualityAgathion, Item.HighQualityAgathion_10),
  }),
]);

export const agathionStableEnchantMap = mergeEnchantMaps([
  createEnchantMap({
    strategy: EnchantStrategy.Destroy,
    enchantItem: Item.AgathionEnchantScroll,
    items: itemsRange(Item.Agathion, Item.Agathion_5),
    chances: chances.slice(0, 5),
  }),
  createEnchantMap({
    strategy: EnchantStrategy.Safe,
    enchantItem: Item.StableScrollEnchantAgathion,
    items: itemsRange(Item.Agathion_5, Item.Agathion_10),
    chances: chances.slice(5),
  }),
]);
