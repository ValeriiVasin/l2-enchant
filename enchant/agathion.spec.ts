import { agathionEnchantMap, agathionStableEnchantMap } from './agathion';

it('enchant map: agathion', () => {
  expect(agathionEnchantMap).toMatchSnapshot();
});

it('enchant map: agathion (stable)', () => {
  expect(agathionStableEnchantMap).toMatchSnapshot();
});
