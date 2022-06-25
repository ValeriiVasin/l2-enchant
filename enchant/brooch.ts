import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const broochEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.TwoToOne,
  items: itemsRange(Item.Brooch_1, Item.Brooch_5),
  chances: [25, 25, 25, 25],
});
