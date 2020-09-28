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
});
