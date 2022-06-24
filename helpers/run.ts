import type { Item } from '../items';
import { enchant } from './enchant';
import { resolveItems } from './resolve-items';
import { roundMap } from './round-map';

interface RunnerFn {
  (from: Item, to: Item[], times: number): void;
}

const runFast: RunnerFn = (from, to, times) => {
  const resolutions = new Map<Item, Map<Item, number>>();

  let prev = from;
  for (const item of to) {
    const result = enchant(prev, item, times);
    const resolvedResult = resolveItems(result, resolutions);
    resolutions.set(item, resolvedResult);
    prev = item;

    console.log(`${from} => ${item}`, roundMap(resolvedResult));
  }
};

const runAccurate: RunnerFn = (from, to, times) => {
  for (const item of to) {
    console.log(`${from} => ${item}`, roundMap(enchant(from, item, times)));
  }
};

const isAccurate = process.argv.includes('--accurate') || process.argv.includes('-a');

export const run: RunnerFn = isAccurate ? runAccurate : runFast;
