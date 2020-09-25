import { enchantOrNothing } from '../helpers/strategies/enchant-or-nothing';
import { Item } from '../items';

const chances = [60, 50, 40, 35, 30, 28, 26, 24, 22, 20];
const items = [
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
];

export const talismanOfEvaEnchantMap = enchantOrNothing({ items, chances });
