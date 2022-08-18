import { growthRuneEnchantMap } from './growth-rune';

it('enchant map: growth rune', () => {
  expect(growthRuneEnchantMap).toMatchSnapshot();
});
