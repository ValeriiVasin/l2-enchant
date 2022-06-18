import { EnchantResult } from '../types';

export function pickEnchantResult(
  results: Array<EnchantResult>,
): EnchantResult {
  let accumulatedChance = 0;
  let expectedChance = Math.random() * 100;

  for (const result of results) {
    accumulatedChance += result.chance;

    if (accumulatedChance > expectedChance) {
      return result;
    }
  }

  throw new Error('Enchant result can not be picked');
}
