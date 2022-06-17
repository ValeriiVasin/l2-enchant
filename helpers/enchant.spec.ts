import { Item } from '../items';
import { EnchantMap } from '../types';
import { enchant } from './enchant';

// success and fails are based on the fact that
// success item is located first in convert-enchants.ts
describe('enchanting', () => {
  let random: jest.SpyInstance;
  let enchantSuccess: () => void;
  let enchantFail: (chance: number) => void;

  beforeEach(() => {
    random = jest.spyOn(Math, 'random');

    enchantSuccess = () => random.mockReturnValueOnce(0);
    enchantFail = (chance: number) => {
      random.mockReturnValueOnce(chance / 100);
    };
  });

  afterEach(() => {
    random.mockClear();
  });

  describe('v1', () => {
    it('simple enchant', () => {
      const enchants: EnchantMap = new Map([
        [
          Item.Agathion_1,
          {
            item: Item.Agathion_1,
            successRate: 50,
            required: Item.AgathionEnchantScroll,
            success: Item.Agathion_2,
            fail: Item.Agathion_1,
          },
        ],
      ]);

      enchantSuccess();
      expect(enchant(Item.Agathion_1, Item.Agathion_2, 1, enchants)).toEqual(
        new Map([
          [Item.Agathion_1, 1],
          [Item.AgathionEnchantScroll, 1],
        ]),
      );
    });

    it('filters out "Nothing" from results', () => {
      const enchants: EnchantMap = new Map([
        [
          Item.Agathion_1,
          {
            item: Item.Agathion_1,
            successRate: 50,
            required: Item.Nothing,
            success: Item.Agathion_2,
            fail: Item.Agathion_1,
          },
        ],
      ]);

      enchantSuccess();
      expect(enchant(Item.Agathion_1, Item.Agathion_2, 1, enchants)).toEqual(
        new Map([[Item.Agathion_1, 1]]),
      );
    });

    it('simple failure', () => {
      const enchants: EnchantMap = new Map([
        [
          Item.Agathion_1,
          {
            item: Item.Agathion_1,
            successRate: 50,
            required: Item.AgathionEnchantScroll,
            success: Item.Agathion_2,
            fail: Item.Nothing,
          },
        ],
      ]);

      // 1 failure, 1 success
      enchantFail(50);
      enchantSuccess();

      expect(enchant(Item.Agathion_1, Item.Agathion_2, 1, enchants)).toEqual(
        new Map([
          [Item.Agathion_1, 2],
          [Item.AgathionEnchantScroll, 2],
        ]),
      );
    });

    it('countable syntax enchant', () => {
      const enchants: EnchantMap = new Map([
        [
          Item.Agathion_1,
          {
            item: Item.Agathion_1,
            successRate: 100,
            required: new Map([[Item.AgathionEnchantScroll, 1]]),
            success: Item.Agathion_2,
            fail: Item.Agathion_1,
          },
        ],
      ]);

      enchantSuccess();
      expect(enchant(Item.Agathion_1, Item.Agathion_2, 1, enchants)).toEqual(
        new Map([
          [Item.Agathion_1, 1],
          [Item.AgathionEnchantScroll, 1],
        ]),
      );
    });

    it('enchants item with multiple countable required items', () => {
      const enchants: EnchantMap = new Map([
        [
          Item.TalismanOfAuthority_5,
          {
            item: Item.TalismanOfAuthority_5,
            successRate: 100,
            required: new Map([
              [Item.Adena, 20_000_000],
              [Item.TalismanOfAuthorityFragment, 3],
            ]),
            success: Item.TalismanOfAuthority_6,
            fail: Item.Nothing,
          },
        ],
      ]);

      enchantSuccess();
      expect(
        enchant(
          Item.TalismanOfAuthority_5,
          Item.TalismanOfAuthority_6,
          1,
          enchants,
        ),
      ).toEqual(
        new Map([
          [Item.TalismanOfAuthority_5, 1],
          [Item.Adena, 20_000_000],
          [Item.TalismanOfAuthorityFragment, 3],
        ]),
      );
    });
  });

  describe('v2', () => {
    it('simple enchant', () => {
      const enchants: EnchantMap = new Map([
        [
          Item.Agathion_1,
          {
            item: Item.Agathion_1,
            cost: Item.AgathionEnchantScroll,
            results: [
              { chance: 50, item: Item.Agathion_2 },
              { chance: 50, item: Item.Agathion_1 },
            ],
          },
        ],
      ]);

      enchantSuccess();
      expect(enchant(Item.Agathion_1, Item.Agathion_2, 1, enchants)).toEqual(
        new Map([
          [Item.Agathion_1, 1],
          [Item.AgathionEnchantScroll, 1],
        ]),
      );
    });

    it('filters out "Nothing" from results', () => {
      const enchants: EnchantMap = new Map([
        [
          Item.Agathion_1,
          {
            item: Item.Agathion_1,
            cost: Item.Nothing,
            results: [
              { chance: 50, item: Item.Agathion_2 },
              { chance: 50, item: Item.Agathion_1 },
            ],
          },
        ],
      ]);

      enchantSuccess();
      expect(enchant(Item.Agathion_1, Item.Agathion_2, 1, enchants)).toEqual(
        new Map([[Item.Agathion_1, 1]]),
      );
    });

    it('simple failure', () => {
      const enchants: EnchantMap = new Map([
        [
          Item.Agathion_1,
          {
            item: Item.Agathion_1,
            cost: Item.AgathionEnchantScroll,
            results: [
              { item: Item.Agathion_2, chance: 50 },
              { item: Item.Nothing, chance: 50 },
            ],
          },
        ],
      ]);

      // 1 failure, 1 success
      enchantFail(50);
      enchantSuccess();

      expect(enchant(Item.Agathion_1, Item.Agathion_2, 1, enchants)).toEqual(
        new Map([
          [Item.Agathion_1, 2],
          [Item.AgathionEnchantScroll, 2],
        ]),
      );
    });

    it('countable syntax enchant', () => {
      const enchants: EnchantMap = new Map([
        [
          Item.Agathion_1,
          {
            item: Item.Agathion_1,
            cost: new Map([[Item.AgathionEnchantScroll, 1]]),
            results: [
              {
                item: Item.Agathion_2,
                chance: 50,
              },
              { item: Item.Agathion_1, chance: 50 },
            ],
          },
        ],
      ]);

      enchantSuccess();
      expect(enchant(Item.Agathion_1, Item.Agathion_2, 1, enchants)).toEqual(
        new Map([
          [Item.Agathion_1, 1],
          [Item.AgathionEnchantScroll, 1],
        ]),
      );
    });

    it('enchants item with multiple countable required items', () => {
      const enchants: EnchantMap = new Map([
        [
          Item.TalismanOfAuthority_5,
          {
            item: Item.TalismanOfAuthority_5,
            cost: new Map([
              [Item.Adena, 20_000_000],
              [Item.TalismanOfAuthorityFragment, 3],
            ]),
            results: [
              { item: Item.TalismanOfAuthority_6, chance: 50 },
              { item: Item.Nothing, chance: 50 },
            ],
          },
        ],
      ]);

      enchantSuccess();
      expect(
        enchant(
          Item.TalismanOfAuthority_5,
          Item.TalismanOfAuthority_6,
          1,
          enchants,
        ),
      ).toEqual(
        new Map([
          [Item.TalismanOfAuthority_5, 1],
          [Item.Adena, 20_000_000],
          [Item.TalismanOfAuthorityFragment, 3],
        ]),
      );
    });
  });
});
