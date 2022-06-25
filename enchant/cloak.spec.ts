import { cloakEnchantMap } from './cloak';

it('enchant map: cloak', () => {
  expect(cloakEnchantMap).toMatchSnapshot();
});
