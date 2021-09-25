import { EnchantMap } from '../types';
import {
  agathionEnchantMap,
  highQualityAgathionEnchantMap,
  upToHighQualityAgathion,
} from './agathion';
import { benirEnchantMap } from './benir';
import { bopEnchantMap } from './bop';
import { broochEnchantMap } from './brooch';
import { chocolateEnchantMap } from './chocolate';
import { cloakEnchantMap } from './cloak';
import { dragonBeltEnchantMap } from './dragon-belt';
import { dragonPendantEnchantMap } from './dragon-pendant';
import { hatEnchantMap } from './hat';
import { heroCrownEnchantMap } from './hero-crown';
import { ignisNecklaceEnchantMap } from './ignis-necklace';
import { rubyEnchantMap } from './ruby';
import { bigRubyEnchantMap } from './ruby-big';
import { runeEnchantMap } from './rune-aden';
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
  ...dragonPendantEnchantMap,
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
  ...chocolateEnchantMap,
  ...benirEnchantMap,
  ...bigRubyEnchantMap,
]);
