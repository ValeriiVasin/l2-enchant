import { Enchant, EnchantV2 } from '../types';

export function convertEnchant(enchant: Enchant): EnchantV2 {
  return {
    item: enchant.item,
    cost: enchant.required,
    results: [
      { chance: enchant.successRate, item: enchant.success },
      { chance: 100 - enchant.successRate, item: enchant.fail },
    ],
  };
}
