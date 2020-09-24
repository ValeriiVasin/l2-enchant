import { enchants } from '../enchant';
import { Item } from '../types';
import { isEnchanted } from './is-enchanted';

export const enchant = (from: Item, to: Item, times = 1000) => {
  const used = new Map<Item, number>();

  for (let i = 0; i < times; i++) {
    let item = from;
    inc(used, item);

    while (item !== to) {
      const currentEnchant = enchants.get(item)!;
      inc(used, currentEnchant.required);

      if (isEnchanted(currentEnchant.successRate)) {
        item = currentEnchant.success;
        continue;
      }

      item = currentEnchant.fail;

      if (item !== Item.Nothing) {
        continue;
      }

      item = from;
      inc(used, item);
    }
  }

  for (const [item, count] of used) {
    used.set(item, Math.round(count / times));
  }

  used.delete(Item.Nothing);

  return used;
};

function inc<T>(map: Map<T, number>, key: T): void {
  if (map.has(key)) {
    map.set(key, map.get(key)! + 1);
    return;
  }

  map.set(key, 1);
}
