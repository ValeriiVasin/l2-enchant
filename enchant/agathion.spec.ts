import { agathionEnchantMap } from './agathion';

it('enchant map: agathion', () => {
  expect(agathionEnchantMap).toMatchSnapshot();
});
