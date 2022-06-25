import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const dragonBeltEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Destroy,
  chances: [95, 90, 85, 55, 50, 40, 33, 30, 25, 15],
  items: itemsRange(Item.DragonBelt, Item.DragonBelt_10),
});
