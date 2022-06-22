import type { Item } from '../items';
import { enchant } from './enchant';
import { resolveItems } from './resolve-items';
import { roundMap } from './round-map';

export function run(from: Item, to: Item[], times: number): void {
  const resolutions = new Map<Item, Map<Item, number>>();

  let prev = from;
  for (const item of to) {
    const result = enchant(prev, item, times);
    const resolvedResult = resolveItems(result, resolutions);
    resolutions.set(item, resolvedResult);
    prev = item;

    console.log(`${from} => ${item}`, roundMap(resolvedResult));
  }
}
