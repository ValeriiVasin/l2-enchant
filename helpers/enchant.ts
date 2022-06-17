import { enchants } from '../enchant';
import { Item } from '../items';
import { Enchant, EnchantV2 } from '../types';
import { convertEnchant } from './convert-enchants';
import { mergeMaps } from './merge-maps';
import { pickEnchantResult } from './pick-enchant-result';

function isEnchantV1(enchant: Enchant | EnchantV2): enchant is Enchant {
  return Object.prototype.hasOwnProperty.call(enchant, 'successRate');
}

export const enchant = (
  from: Item,
  to: Item,
  times = 1000,
  enchantMap = enchants,
): Map<Item, number> => {
  let used = new Map<Item, number>();

  for (let i = 0; i < times; i++) {
    let item = from;
    used = inc(used, item);

    while (item !== to) {
      let currentEnchant = enchantMap.get(item)!;

      if (isEnchantV1(currentEnchant)) {
        currentEnchant = convertEnchant(currentEnchant);
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
    used.set(item, Math.round(count / times));
  }

  used.delete(Item.Nothing);

  return used;
};

function isSingleItem(value: Item | Map<Item, number>): value is Item {
  return typeof value === 'string';
}

function inc(
  map: Map<Item, number>,
  key: Item | Map<Item, number>,
): Map<Item, number> {
  return mergeMaps(map, isSingleItem(key) ? new Map([[key, 1]]) : key);
}
