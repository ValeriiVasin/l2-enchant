import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const talismanOfEvaEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Destroy,
  chances: [60, 50, 40, 35, 30, 28, 26, 24, 22, 20],
  items: [
    Item.TalismanOfEva,
    Item.TalismanOfEva_1,
    Item.TalismanOfEva_2,
    Item.TalismanOfEva_3,
    Item.TalismanOfEva_4,
    Item.TalismanOfEva_5,
    Item.TalismanOfEva_6,
    Item.TalismanOfEva_7,
    Item.TalismanOfEva_8,
    Item.TalismanOfEva_9,
    Item.TalismanOfEva_10,
  ],
});
