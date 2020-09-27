import { enchant } from '../helpers/enchant';
import { resolveItems } from '../helpers/resolve-items';
import { Item } from '../items';

const enchants: Item[] = [
  Item.Brooch_2,
  Item.Brooch_3,
  Item.Brooch_4,
  Item.Brooch_5,
];

let resolutions: Map<Item, Map<Item, number>> = new Map();
for (const item of enchants) {
  const enchantResult = enchant(Item.Brooch_1, item, 1000);
  const resolvedEnchantResult = resolveItems(enchantResult, resolutions);

  resolutions.set(item, resolvedEnchantResult);

  console.log(`${Item.Brooch_1} => ${item}`, resolvedEnchantResult);
}
