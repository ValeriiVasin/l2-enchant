import { Item } from '../items';
import { EnchantResult } from '../types';
import { pickEnchantResult } from './pick-enchant-result';

describe('pick enchant result', () => {
  let first: EnchantResult;
  let second: EnchantResult;
  let third: EnchantResult;
  let results: Array<EnchantResult>;
  let random: jest.SpyInstance;

  beforeEach(() => {
    first = { chance: 20, item: Item.Agathion_1 };
    second = { chance: 40, item: Item.Agathion_2 };
    third = { chance: 40, item: Item.Agathion_3 };
    results = [first, second, third];
    random = jest.spyOn(Math, 'random');
  });

  afterEach(() => {
    random.mockClear();
  });

  test('zero returns first', () => {
    random.mockReturnValue(0);
    expect(pickEnchantResult(results)).toEqual(first);
  });

  test('first', () => {
    random.mockReturnValue(0.1);
    expect(pickEnchantResult(results)).toEqual(first);
  });

  test('second', () => {
    random.mockReturnValue(0.3);
    expect(pickEnchantResult(results)).toEqual(second);
  });

  test('third', () => {
    random.mockReturnValue(0.8);
    expect(pickEnchantResult(results)).toEqual(third);
  });

  test('picks second item on low edge', () => {
    random.mockReturnValue(0.2);
    expect(pickEnchantResult(results)).toEqual(second);
  });

  test('picks third item on low edge', () => {
    random.mockReturnValue(0.6);
    expect(pickEnchantResult(results)).toEqual(third);
  });

  test('throws if result can not be picked', () => {
    results.pop();
    random.mockReturnValue(0.6);
    const pick = () => pickEnchantResult(results);
    expect(pick).toThrowError('Enchant result can not be picked');
  });
});
