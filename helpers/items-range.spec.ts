import { Item } from '../items';
import { itemsRange } from './items-range';

describe('items range', () => {
  it('throws when same item is provided', () => {
    const wrapper = () => itemsRange(Item.Agathion, Item.Agathion);
    expect(wrapper).toThrowError('Low item in range should have lower level and/or lower enchant');
  });

  it('throws when items having different base', () => {
    const wrapper = () => itemsRange(Item.Agathion, Item.RuneAden_1);
    expect(wrapper).toThrowError('Items in range should have the same base');
  });

  it('throws if low item level is greater than high', () => {
    const wrapper = () => itemsRange(Item.RuneAden_20, Item.RuneAden_19);
    expect(wrapper).toThrowError('Low item in range should have lower level and/or lower enchant');
  });

  it('throws if low item is more enchanted than high and levels are the same', () => {
    const wrapper = () => itemsRange(Item.Agathion_1, Item.Agathion);
    expect(wrapper).toThrowError('Low item in range should have lower level and/or lower enchant');
  });

  describe('items with item level', () => {
    it('low item without level', () => {
      expect(itemsRange(Item.Agathion, Item.Agathion_2)).toEqual([Item.Agathion, Item.Agathion_1, Item.Agathion_2]);
    });

    it('low item with level', () => {
      expect(itemsRange(Item.RuneAden_1, Item.RuneAden_3)).toEqual([Item.RuneAden_1, Item.RuneAden_2, Item.RuneAden_3]);
    });

    it('result is properly so rted', () => {
      expect(itemsRange(Item.RuneAden_9, Item.RuneAden_11)).toEqual([
        Item.RuneAden_9,
        Item.RuneAden_10,
        Item.RuneAden_11,
      ]);
    });
  });

  describe('items with modifications', () => {
    it('low item without enchant', () => {
      expect(itemsRange(Item.BOP, Item.BOP_2)).toEqual([Item.BOP, Item.BOP_1, Item.BOP_2]);
    });

    it('low item with enchant', () => {
      expect(itemsRange(Item.BOP_1, Item.BOP_3)).toEqual([Item.BOP_1, Item.BOP_2, Item.BOP_3]);
    });

    it('results are properly sorted', () => {
      expect(itemsRange(Item.BOP_9, Item.BOP_11)).toEqual([Item.BOP_9, Item.BOP_10, Item.BOP_11]);
    });
  });

  describe('with level and modifications', () => {
    it('same items level', () => {
      expect(itemsRange(Item.DragonPendantOne, Item.DragonPendantOne_3)).toEqual([
        Item.DragonPendantOne,
        Item.DragonPendantOne_1,
        Item.DragonPendantOne_2,
        Item.DragonPendantOne_3,
      ]);
    });

    it('different items level', () => {
      expect(itemsRange(Item.DragonPendantOne_4, Item.DragonPendantTwo_1)).toEqual([
        Item.DragonPendantOne_4,
        Item.DragonPendantOne_5,
        Item.DragonPendantTwo,
        Item.DragonPendantTwo_1,
      ]);
    });
  });
});
