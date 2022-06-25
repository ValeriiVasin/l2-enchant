import { runeHardinEnchantMap } from './rune-hardin';

it('enchant map: rune hardin', () => {
  expect(runeHardinEnchantMap).toMatchSnapshot();
});
