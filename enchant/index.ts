import { EnchantMap } from '../types';
import { cloakEnchantMap } from './cloak';
import { talismanOfAdenEnchantMap } from './talisman-of-aden';
import { talismanOfEvaEnchantMap } from './talisman-of-eva';

export const enchants: EnchantMap = new Map([
  ...cloakEnchantMap,
  ...talismanOfAdenEnchantMap,
  ...talismanOfEvaEnchantMap,
]);
