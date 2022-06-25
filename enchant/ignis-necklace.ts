import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const ignisNecklaceEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.BlessedSpiritsVarnish,
  chances: [50, 50, 40, 40, 30, 30, 20, 10, 3, 1],
  items: [
    Item.IgnisNecklace,
    Item.IgnisNecklace_1,
    Item.IgnisNecklace_2,
    Item.IgnisNecklace_3,
    Item.IgnisNecklace_4,
    Item.IgnisNecklace_5,
    Item.IgnisNecklace_6,
    Item.IgnisNecklace_7,
    Item.IgnisNecklace_8,
    Item.IgnisNecklace_9,
    Item.IgnisNecklace_10,
  ],
});
