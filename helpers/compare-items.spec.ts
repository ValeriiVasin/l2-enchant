import { compareItems } from './compare-items';

describe('compare items', () => {
  describe('different base', () => {
    it('is less', () => {
      expect(compareItems('Кристалл Души Адена Ур.1', 'Талисман Дерзости Ур.6')).toBe(-1);
    });

    it('is more', () => {
      expect(compareItems('Талисман Дерзости Ур.6', 'Кристалл Души Адена Ур.1')).toBe(1);
    });

    it('is equal', () => {
      expect(compareItems('Кристалл Души Адена Ур.1', 'Кристалл Души Адена Ур.1')).toBe(0);
    });
  });

  describe('same base', () => {
    describe('with level only', () => {
      it('is less', () => {
        expect(compareItems('Кристалл Души Адена Ур.1', 'Кристалл Души Адена Ур.2')).toBe(-1);
      });

      it('is more', () => {
        expect(compareItems('Кристалл Души Адена Ур.2', 'Кристалл Души Адена Ур.1')).toBe(1);
      });

      it('is equal', () => {
        expect(compareItems('Кристалл Души Адена Ур.1', 'Кристалл Души Адена Ур.1')).toBe(0);
      });
    });

    describe('with enchant only', () => {
      it('item without enchant is less than with', () => {
        expect(compareItems('Лук Угрозы', 'Лук Угрозы +1')).toBe(-1);
      });

      it('is less', () => {
        expect(compareItems('Лук Угрозы +1', 'Лук Угрозы +2')).toBe(-1);
      });

      it('is more', () => {
        expect(compareItems('Лук Угрозы +2', 'Лук Угрозы +1')).toBe(1);
      });

      it('is equal', () => {
        expect(compareItems('Лук Угрозы +1', 'Лук Угрозы +1')).toBe(0);
      });
    });

    describe('with level and enchant', () => {
      describe('same level', () => {
        describe('is less', () => {
          it('without and without enchant', () => {
            expect(compareItems('Подвеска Дракона Ур.1', 'Подвеска Дракона Ур.1 +1')).toBe(-1);
          });

          it('with enchant', () => {
            expect(compareItems('Подвеска Дракона Ур.1 +1', 'Подвеска Дракона Ур.1 +2')).toBe(-1);
          });
        });

        describe('is more', () => {
          it('without enchant', () => {
            expect(compareItems('Подвеска Дракона Ур.1 +1', 'Подвеска Дракона Ур.1')).toBe(1);
          });

          it('with enchant', () => {
            expect(compareItems('Подвеска Дракона Ур.1 +2', 'Подвеска Дракона Ур.1 +1')).toBe(1);
          });
        });

        describe('is equal', () => {
          it('with enchant', () => {
            expect(compareItems('Подвеска Дракона Ур.1 +2', 'Подвеска Дракона Ур.1 +2')).toBe(0);
          });

          it('without enchant', () => {
            expect(compareItems('Подвеска Дракона Ур.1', 'Подвеска Дракона Ур.1')).toBe(0);
          });
        });
      });

      describe('different level', () => {
        describe('is less', () => {
          it('without enchant', () => {
            expect(compareItems('Подвеска Дракона Ур.1', 'Подвеска Дракона Ур.2')).toBe(-1);
          });

          it('witho enchant', () => {
            expect(compareItems('Подвеска Дракона Ур.1 +5', 'Подвеска Дракона Ур.2')).toBe(-1);
          });
        });

        describe('is more', () => {
          it('without enchant', () => {
            expect(compareItems('Подвеска Дракона Ур.2', 'Подвеска Дракона Ур.1')).toBe(1);
          });

          it('witho enchant', () => {
            expect(compareItems('Подвеска Дракона Ур.2', 'Подвеска Дракона Ур.1 +5')).toBe(1);
          });
        });
      });
    });
  });
});
