import { Item } from '../items';
import { Enchant, EnchantV2 } from '../types';
import { convertEnchant } from './convert-enchants';

describe('convert enchant', () => {
  it('converts enchant version', () => {
    const enchant: Enchant = {
      item: Item.Agathion_1,
      required: new Map([[Item.Adena, 1_000_000]]),
      successRate: 60,
      success: Item.Agathion_2,
      fail: Item.Agathion_1,
    };

    const expected: EnchantV2 = {
      item: Item.Agathion_1,
      required: new Map([[Item.Adena, 1_000_000]]),
      enchant: [
        { chance: 60, item: Item.Agathion_2 },
        { chance: 40, item: Item.Agathion_1 },
      ],
    };

    expect(convertEnchant(enchant)).toEqual(expected);
  });
});
