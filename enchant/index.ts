import { mergeEnchantMaps } from '../helpers/merge-enchants';
import { agathionEnchantMap } from './agathion';
import { benirEnchantMap } from './benir';
import { bopEnchantMap } from './bop';
import { broochEnchantMap } from './brooch';
import { cloakEnchantMap } from './cloak';
import { dragonBeltEnchantMap } from './dragon-belt';
import { dragonPendantEnchantMap } from './dragon-pendant';
import { dyeEnchantMap } from './dye';
import { eventChocolateEnchantMap } from './event-chocolate';
import { eventDragonSlayerEnchantMap } from './event-dragon-slayer';
import { hatEnchantMap } from './hat';
import { heroCrownEnchantMap } from './hero-crown';
import { ignisNecklaceEnchantMap } from './ignis-necklace';
import { rubyEnchantMap } from './ruby';
import { rubyBigEnchantMap } from './ruby-big';
import { runeAdenEnchantMap } from './rune-aden';
import { runeHardinEnchantMap } from './rune-hardin';
import { talismanOfAdenEnchantMap } from './talisman-of-aden';
import { talismanOfAuthorityEnchantMap } from './talisman-of-authority';
import { talismanOfEvaEnchantMap } from './talisman-of-eva';
import { talismanOfInsolenceEnchantMap } from './talisman-of-insolence';

export const enchants = mergeEnchantMaps([
  agathionEnchantMap,
  benirEnchantMap,
  rubyBigEnchantMap,
  bopEnchantMap,
  broochEnchantMap,
  eventChocolateEnchantMap,
  cloakEnchantMap,
  dragonBeltEnchantMap,
  dragonPendantEnchantMap,
  dyeEnchantMap,
  eventDragonSlayerEnchantMap,
  hatEnchantMap,
  heroCrownEnchantMap,
  ignisNecklaceEnchantMap,
  rubyEnchantMap,
  runeAdenEnchantMap,
  runeHardinEnchantMap,
  talismanOfAdenEnchantMap,
  talismanOfAuthorityEnchantMap,
  talismanOfEvaEnchantMap,
  talismanOfInsolenceEnchantMap,
]);
