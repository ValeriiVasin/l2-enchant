import { Item } from '../items';
import type { EnchantMap } from '../types';
import { mergeMaps } from './merge-maps';
import { pickEnchantResult } from './pick-enchant-result';

export const enchant = (from: Item, to: Item, times = 1000, enchantMap: EnchantMap): Map<Item, number> => {
  let used = new Map<Item, number>();

  for (let i = 0; i < times; i++) {
    let item = from;
    used = inc(used, item);

    while (item !== to) {
      const currentEnchant = enchantMap.get(item);

      if (!currentEnchant) {
        throw new Error(`Can not find enchant map for: ${item}`);
      }

      used = inc(used, currentEnchant.cost);

      const result = pickEnchantResult(currentEnchant.results);
      item = result.item;

      if (item !== Item.Nothing) {
        continue;
      }

      item = from;
      used = inc(used, item);
    }
  }

  for (const [item, count] of used) {
    used.set(item, count / times);
  }

  used.delete(Item.Nothing);

  return used;
};

function isSingleItem(value: Item | Map<Item, number>): value is Item {
  return typeof value === 'string';
}

function inc(map: Map<Item, number>, key: Item | Map<Item, number>): Map<Item, number> {
  return mergeMaps(map, isSingleItem(key) ? new Map([[key, 1]]) : key);
}
