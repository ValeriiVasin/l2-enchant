import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const dyeEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Safe,
  enchantItem: Item.DyePowder,
  chances: [50, 25, 20, 15, 10, 8, 6, 5, 5, 5, 5],
  items: [
    Item.Dye,
    Item.Dye_1,
    Item.Dye_2,
    Item.Dye_3,
    Item.Dye_4,
    Item.Dye_5,
    Item.Dye_6,
    Item.Dye_7,
    Item.Dye_8,
    Item.Dye_9,
    Item.Dye_10,
    Item.Dye_11,
  ],
});
