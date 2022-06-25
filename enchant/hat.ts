import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const hatEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Destroy,
  enchantItem: Item.EvaScrollEnchantHairAccessory,
  chances: [100, 100, 100, 50, 40, 40, 8, 8, 5, 2],
  items: [
    Item.Hat,
    Item.Hat_1,
    Item.Hat_2,
    Item.Hat_3,
    Item.Hat_4,
    Item.Hat_5,
    Item.Hat_6,
    Item.Hat_7,
    Item.Hat_8,
    Item.Hat_9,
    Item.Hat_10,
  ],
});
