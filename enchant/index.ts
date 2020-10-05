import { EnchantMap } from '../types';
import {
  agathionEnchantMap,
  highQualityAgathionEnchantMap,
  upToHighQualityAgathion,
} from './agathion';
import { bopEnchantMap } from './bop';
import { broochEnchantMap } from './brooch';
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
import { rubyEnchantMap } from './ruby';
import { runeEnchantMap } from './rune';
import { runeLilithEnchantMap } from './rune-lilith';
import { talismanOfAdenEnchantMap } from './talisman-of-aden';
import {
  nobleTalismanOfAuthorityEnchantMap,
  radiantTalismanOfAuthorityEnchantMap,
  talismanOfAuthorityEnchantMap,
  upToNoble,
  upToRadiant,
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
  ...upToNoble,
  ...nobleTalismanOfAuthorityEnchantMap,
  ...upToRadiant,
  ...radiantTalismanOfAuthorityEnchantMap,
  ...runeEnchantMap,
  ...agathionEnchantMap,
  ...upToHighQualityAgathion,
  ...highQualityAgathionEnchantMap,
  ...hatEnchantMap,
  ...heroCrownEnchantMap,
  ...dragonBeltEnchantMap,
  ...ignisNecklaceEnchantMap,
  ...bopEnchantMap,
  ...broochEnchantMap,
  ...runeLilithEnchantMap,
  ...rubyEnchantMap,
]);
