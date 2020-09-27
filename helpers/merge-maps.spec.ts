import { mergeMaps } from './merge-maps';

describe('merge maps', () => {
  it('with different keys', () => {
    const one = new Map([['one', 1]]);
    const two = new Map([['two', 2]]);

    expect(mergeMaps(one, two)).toEqual(
      new Map([
        ['one', 1],
        ['two', 2],
      ]),
    );
  });

  it('sums up similar keys', () => {
    const one = new Map([['one', 1]]);
    const two = new Map([
      ['one', 5],
      ['two', 2],
    ]);

    expect(mergeMaps(one, two)).toEqual(
      new Map([
        ['one', 6],
        ['two', 2],
      ]),
    );
  });
});
