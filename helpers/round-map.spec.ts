import { describe } from '@jest/globals';
import { Item } from '../items';
import { roundMap } from './round-map';

describe('round map', () => {
  test('rounds map values', () => {
    const input = new Map([
      [Item.Adena, 300.3],
      [Item.TalismanOfEva, 300.6],
    ]);
    const expected = new Map([
      [Item.Adena, 300],
      [Item.TalismanOfEva, 301],
    ]);

    expect(roundMap(input)).toEqual(expected);
  });
});
