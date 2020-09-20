import { EnchantMap } from '../types';
import { agathionEnchantMap } from './agathion';
import { cloakEnchantMap } from './cloak';
import { dragonBeltEnchantMap } from './dragon-belt';
import {
  dragonPendantOneEnchantMap,
  dragonPendantThreeEnchantMap,
  dragonPendantTwoEnchantMap,
} from './dragon-pendant';
import { hatEnchantMap } from './hat';
import { heroCrownEnchantMap } from './hero-crown';
import { ignisNecklaceEnchantMap } from './ignis-necklace';
import { runeEnchantMap } from './rune';
import { talismanOfAdenEnchantMap } from './talisman-of-aden';
import {
  nobleTalismanOfAuthorityEnchantMap,
  radiantTalismanOfAuthorityEnchantMap,
  talismanOfAuthorityEnchantMap,
} from './talisman-of-authority';
import { talismanOfEvaEnchantMap } from './talisman-of-eva';

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
  ...runeEnchantMap,
  ...agathionEnchantMap,
  ...hatEnchantMap,
  ...heroCrownEnchantMap,
  ...dragonBeltEnchantMap,
  ...ignisNecklaceEnchantMap,
]);
