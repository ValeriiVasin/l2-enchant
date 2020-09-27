import { resolveItems } from './resolve-items';

describe('resolve items', () => {
  it('resolves single item', () => {
    const item = new Map([
      ['a', 1],
      ['b', 2],
    ]);

    const resolutions = new Map([['b', new Map([['a', 2]])]]);

    expect(resolveItems(item, resolutions)).toEqual(new Map([['a', 5]]));
  });

  it('resolves multiple items', () => {
    const item = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);

    const resolutions = new Map([['b', new Map([['a', 2]])]]);

    expect(resolveItems(item, resolutions)).toEqual(
      new Map([
        ['a', 5],
        ['c', 3],
      ]),
    );
  });

  it('resolves multiple items (resolve of resolved)', () => {
    const item = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);

    const resolutions = new Map([
      ['b', new Map([['a', 2]])],
      ['c', new Map([['b', 3]])],
    ]);

    expect(resolveItems(item, resolutions)).toEqual(new Map([['a', 23]]));
  });
});
