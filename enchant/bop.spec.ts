import { bopEnchantMap } from './bop';

it('enchant map: bop', () => {
  expect(bopEnchantMap).toMatchSnapshot();
});
