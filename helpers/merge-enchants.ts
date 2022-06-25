import type { EnchantMap } from '../types';

export const mergeEnchantMaps = (enchantMaps: EnchantMap[]): EnchantMap =>
  new Map(enchantMaps.map((enchantMap) => [...enchantMap.entries()]).flat());
