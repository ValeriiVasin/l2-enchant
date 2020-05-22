import { EnchantMap } from '../types';
import { cloakEnchantMap } from './cloak';
import { talismanOfAdenEnchantMap } from './talisman-of-aden';
import { talismanOfEvaEnchantMap } from './talisman-of-eva';
import {
  dragonPendantOneEnchantMap,
  dragonPendantTwoEnchantMap,
  dragonPendantThreeEnchantMap,
} from './dragon-pendant';
import {
  talismanOfAuthorityEnchantMap,
  nobleTalismanOfAuthorityEnchantMap,
  radiantTalismanOfAuthorityEnchantMap,
} from './talisman-of-authority';

export const enchants: EnchantMap = new Map([
  ...cloakEnchantMap,
  ...talismanOfAdenEnchantMap,
  ...talismanOfEvaEnchantMap,
  ...dragonPendantOneEnchantMap,
  ...dragonPendantTwoEnchantMap,
  ...dragonPendantThreeEnchantMap,
  ...talismanOfAuthorityEnchantMap,
  ...nobleTalismanOfAuthorityEnchantMap,
  ...radiantTalismanOfAuthorityEnchantMap,
]);
