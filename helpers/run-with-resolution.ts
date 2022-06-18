import type { Item } from '../items';
import { enchant } from './enchant';
import { resolveItems } from './resolve-items';

export function runWithResolution(from: Item, to: Item[], times: number): void {
  const resolutions: Map<Item, Map<Item, number>> = new Map();

  for (const item of to) {
    const enchantResult = enchant(from, item, times);
    const resolvedEnchantResult = resolveItems(enchantResult, resolutions);

    resolutions.set(item, resolvedEnchantResult);

    console.log(`${from} => ${item}`, resolvedEnchantResult);
  }
}
