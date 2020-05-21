import { EnchantMap } from '../types';
import { cloakEnchantMap } from './cloak';
import { talismanOfAdenEnchantMap } from './talisman-of-aden';

export const enchants: EnchantMap = new Map([
  ...cloakEnchantMap,
  ...talismanOfAdenEnchantMap,
]);
