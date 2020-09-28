import { mocked } from 'ts-jest/utils';
import { Item } from '../items';
import { EnchantMap } from '../types';
import { enchant } from './enchant';
import { isEnchanted } from './is-enchanted';

jest.mock('./is-enchanted');
const mockedIsEnchanted = mocked(isEnchanted);

describe('enchanting', () => {
  it('simple enchant', () => {
    const enchants: EnchantMap = new Map([
      [
        Item.Agathion_1,
        {
          item: Item.Agathion_1,
          successRate: 100,
          required: Item.AgathionEnchantScroll,
          success: Item.Agathion_2,
          fail: Item.Agathion_1,
        },
      ],
    ]);

    mockedIsEnchanted.mockReturnValue(true);
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
          successRate: 100,
          required: Item.Nothing,
          success: Item.Agathion_2,
          fail: Item.Agathion_1,
        },
      ],
    ]);

    mockedIsEnchanted.mockReturnValue(true);
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
          successRate: 100,
          required: Item.AgathionEnchantScroll,
          success: Item.Agathion_2,
          fail: Item.Nothing,
        },
      ],
    ]);

    // 1 failure, 1 success
    mockedIsEnchanted.mockReturnValueOnce(false).mockReturnValueOnce(true);

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

    mockedIsEnchanted.mockReturnValue(true);
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
          success: Item.NobleTalismanOfAuthority_1,
          fail: Item.Nothing,
        },
      ],
    ]);

    mockedIsEnchanted.mockReturnValueOnce(true);

    expect(
      enchant(
        Item.TalismanOfAuthority_5,
        Item.NobleTalismanOfAuthority_1,
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
