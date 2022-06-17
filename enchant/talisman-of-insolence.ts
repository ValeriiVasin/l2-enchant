import { Item } from '../items';
import { EnchantMap } from '../types';

// https://forums.lineage2.com/topic/10049-tower-of-insolence/?do=findComment&comment=76516
export const talismanOfBaiumEnchantMap: EnchantMap = new Map([
  [
    Item.TalismanOfInsolence_1,
    {
      item: Item.TalismanOfInsolence_1,
      cost: new Map([
        [Item.ElementalStone, 40],
        [Item.EnergyOfInsolence, 2],
        [Item.TalismanCrystal, 30],
      ]),
      results: [
        { chance: 20, item: Item.TalismanOfInsolence_1 },
        { chance: 80, item: Item.TalismanOfInsolence_2 },
      ],
    },
  ],
  [
    Item.TalismanOfInsolence_2,
    {
      item: Item.TalismanOfInsolence_2,
      cost: new Map([
        [Item.ElementalStone, 100],
        [Item.EnergyOfInsolence, 3],
        [Item.TalismanCrystal, 45],
      ]),
      results: [
        { chance: 40, item: Item.TalismanOfInsolence_2 },
        { chance: 60, item: Item.TalismanOfInsolence_3 },
      ],
    },
  ],
  [
    Item.TalismanOfInsolence_3,
    {
      item: Item.TalismanOfInsolence_3,
      cost: new Map([
        [Item.ElementalStone, 100],
        [Item.EnergyOfInsolence, 4],
        [Item.TalismanCrystal, 70],
      ]),
      results: [
        { chance: 10, item: Item.TalismanOfInsolence_2 },
        { chance: 40, item: Item.TalismanOfInsolence_4 },
        { chance: 50, item: Item.TalismanOfInsolence_3 },
      ],
    },
  ],
  [
    Item.TalismanOfInsolence_4,
    {
      item: Item.TalismanOfInsolence_4,
      cost: new Map([
        [Item.ElementalStone, 200],
        [Item.EnergyOfInsolence, 5],
        [Item.TalismanCrystal, 100],
      ]),
      results: [
        { chance: 10, item: Item.TalismanOfInsolence_5 },
        { chance: 40, item: Item.TalismanOfInsolence_3 },
        { chance: 50, item: Item.TalismanOfInsolence_4 },
      ],
    },
  ],
  [
    Item.TalismanOfInsolence_5,
    {
      item: Item.TalismanOfInsolence_5,
      cost: new Map([[Item.Bx, 5_000]]),
      results: [{ chance: 100, item: Item.TalismanOfInsolence_6 }],
    },
  ],
]);
