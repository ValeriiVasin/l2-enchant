import { parseItem } from './parse-item';

describe('parse item', () => {
  it('parses item without level end enchant', () => {
    expect(parseItem('Узор')).toEqual({ base: 'Узор', level: 0, enchant: 0 });
  });

  it('parses item with just a level', () => {
    expect(parseItem('Брошь Ур.4')).toEqual({ base: 'Брошь', level: 4, enchant: 0 });
  });

  it('parses item with just enchant', () => {
    expect(parseItem('Меч Убийца Драконов +15')).toEqual({ base: 'Меч Убийца Драконов', level: 0, enchant: 15 });
  });

  it('parses item with enchant and level', () => {
    expect(parseItem('Подвеска Дракона Ур.1 +1')).toEqual({ base: 'Подвеска Дракона', level: 1, enchant: 1 });
  });
});
