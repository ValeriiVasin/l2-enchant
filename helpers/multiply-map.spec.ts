import { multiplyMap } from './multiply-map';

describe('multiply map', () => {
  it('empty map for empty map', () => {
    expect(multiplyMap(new Map(), 3)).toEqual(new Map());
  });

  it('multiplies value of map with one key', () => {
    expect(multiplyMap(new Map([['a', 2]]), 3)).toEqual(new Map([['a', 6]]));
  });

  it('multiplies values of map with multiple keys', () => {
    expect(
      multiplyMap(
        new Map([
          ['a', 2],
          ['b', 5],
        ]),
        3,
      ),
    ).toEqual(
      new Map([
        ['a', 6],
        ['b', 15],
      ]),
    );
  });
});
