import { describe, it } from '@jest/globals';
import { Item } from '../items';
import { EnchantStrategy } from '../types';
import { createEnchantMap } from './create-enchant-map';

describe('create enchant map', () => {
  it('throws when items mismatch with chances', () => {
    const wrapper = () =>
      createEnchantMap({
        strategy: EnchantStrategy.Destroy,
        chances: [1, 2, 3],
        items: [Item.Agathion, Item.Agathion_1],
      });

    expect(wrapper).toThrowError('Items should always contain one item more than chances');
  });

  it('Destroy strategy', () => {
    expect(
      createEnchantMap({
        strategy: EnchantStrategy.Destroy,
        enchantItem: Item.EWB,
        chances: [100, 100, 100, 66],
        items: [Item.BOP, Item.BOP_1, Item.BOP_2, Item.BOP_3, Item.BOP_4],
      }),
    ).toMatchSnapshot();
  });

  it('Decrease strategy', () => {
    expect(
      createEnchantMap({
        strategy: EnchantStrategy.Decrease,
        enchantItem: Item.ScrollEnchantCloak,
        chances: [70, 65, 58],
        items: [Item.Cloak, Item.Cloak_1, Item.Cloak_2, Item.Cloak_3],
      }),
    ).toMatchSnapshot();
  });

  describe('Drop strategy', () => {
    it('drops to first element', () => {
      expect(
        createEnchantMap({
          strategy: EnchantStrategy.Drop,
          enchantItem: Item.BenirEnchantItem,
          items: [Item.Benir_1, Item.Benir_2, Item.Benir_3, Item.Benir_4, Item.Benir_5, Item.Benir_6],
          chances: [50, 45, 40, 35, 50],
        }),
      ).toMatchSnapshot();
    });

    it('drops to boundaries', () => {
      expect(
        createEnchantMap({
          strategy: EnchantStrategy.Drop,
          enchantItem: Item.BenirEnchantItem,
          items: [Item.Benir_1, Item.Benir_2, Item.Benir_3, Item.Benir_4, Item.Benir_5, Item.Benir_6],
          chances: [50, 45, 40, 35, 50],
          boundaries: new Set([Item.Benir_3, Item.Benir_5]),
        }),
      ).toMatchSnapshot();
    });
  });

  it('TwoToOne strategy', () => {
    expect(
      createEnchantMap({
        strategy: EnchantStrategy.TwoToOne,
        items: [Item.Brooch_1, Item.Brooch_2, Item.Brooch_3, Item.Brooch_4, Item.Brooch_5],
        chances: [25, 25, 25, 25],
      }),
    ).toMatchSnapshot();
  });

  it('Safe strategy', () => {
    expect(
      createEnchantMap({
        strategy: EnchantStrategy.Safe,
        enchantItem: Item.StableScrollEnchantLegendaryCloak,
        chances: [28, 28, 48, 48, 20],
        items: [
          Item.LegendaryCloak_10,
          Item.LegendaryCloak_11,
          Item.LegendaryCloak_12,
          Item.LegendaryCloak_13,
          Item.LegendaryCloak_14,
          Item.LegendaryCloak_15,
        ],
      }),
    ).toMatchSnapshot();
  });
});
