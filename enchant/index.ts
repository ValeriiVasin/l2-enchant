import { EnchantMap } from '../types';
import { cloakEnchantMap } from './cloak';
import { talismanOfAdenEnchantMap } from './talisman-of-aden';
import { talismanOfEvaEnchantMap } from './talisman-of-eva';
import { dragonPendantOneEnchantMap } from './dragon-pendant';

export const enchants: EnchantMap = new Map([
  ...cloakEnchantMap,
  ...talismanOfAdenEnchantMap,
  ...talismanOfEvaEnchantMap,
  ...dragonPendantOneEnchantMap,
]);
