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
import { runeAdenEnchantMap } from './rune-aden';
import { runeHardinEnchantMap } from './rune-hardin';
import { talismanOfAdenEnchantMap } from './talisman-of-aden';
import { talismanOfAuthorityEnchantMap } from './talisman-of-authority';
import { talismanOfEvaEnchantMap } from './talisman-of-eva';

export const enchants: EnchantMap = new Map([
  ...cloakEnchantMap,
  ...talismanOfAdenEnchantMap,
  ...talismanOfEvaEnchantMap,
  ...dragonPendantEnchantMap,
  ...talismanOfAuthorityEnchantMap,
  ...runeAdenEnchantMap,
  ...agathionEnchantMap,
  ...upToHighQualityAgathion,
  ...highQualityAgathionEnchantMap,
  ...hatEnchantMap,
  ...heroCrownEnchantMap,
  ...dragonBeltEnchantMap,
  ...ignisNecklaceEnchantMap,
  ...bopEnchantMap,
  ...broochEnchantMap,
  ...runeHardinEnchantMap,
  ...rubyEnchantMap,
  ...chocolateEnchantMap,
  ...benirEnchantMap,
  ...bigRubyEnchantMap,
]);
