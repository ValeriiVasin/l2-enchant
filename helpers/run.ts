import { Item } from '../items';
import { enchant } from './enchant';

export function run(from: Item, to: Item[], times: number): void {
  for (const item of to) {
    console.log(`${from} => ${item}`, enchant(from, item, times));
  }
}
