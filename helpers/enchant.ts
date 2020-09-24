import { enchants } from '../enchant';
import { Item } from '../types';
import { isEnchanted } from './is-enchanted';

export const enchant = (from: Item, to: Item, times = 1000) => {
  const used = new Map<Item, number>();

  for (let i = 0; i < times; i++) {
    let item = from;

    while (item !== to) {
      const currentEnchant = enchants.get(item)!;
      used.set(
        currentEnchant.required,
        (used.get(currentEnchant.required) ?? 0) + 1
      );

      if (isEnchanted(currentEnchant.successRate)) {
        item = currentEnchant.success;
        continue;
      }

      item = currentEnchant.fail;

      if (item !== Item.Nothing) {
        continue;
      }

      item = from;
      used.set(item, (used.get(item) ?? 0) + 1);
    }
  }

  for (const [item, count] of used) {
    used.set(item, Math.round(count / times));
  }

  return used;
};
