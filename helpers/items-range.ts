import { Item } from '../items';
import { parseItem } from './parse-item';

export function itemsRange(low: Item, high: Item): Array<Item> {
  if (low === high) {
    throw new Error('Items in range should be distinct');
  }

  const lowParsed = parseItem(low);
  const highParsed = parseItem(high);

  if (lowParsed.base !== highParsed.base) {
    throw new Error('Items in range should have the same base');
  }

  if (lowParsed.level > highParsed.level) {
    throw new Error('Low item level in range should be less or equal than higher one');
  }

  if (lowParsed.level === highParsed.level && lowParsed.enchant > highParsed.enchant) {
    throw new Error('Low item in range should be less enchanted than high');
  }

  const results: Array<Item> = [];

  for (const value of Object.values(Item)) {
    const { base, enchant, level } = parseItem(value);

    if (base !== lowParsed.base) {
      continue;
    }

    console.log('base matched', value);
    if (level < lowParsed.level || level > highParsed.level) {
      continue;
    }

    console.log('level matched', value);
    if (level === lowParsed.level && enchant < lowParsed.enchant) {
      continue;
    }

    console.log('low enchant matched', value);
    if (level === highParsed.level && enchant > highParsed.enchant) {
      continue;
    }

    console.log('full match', value);
    results.push(value);
  }
  console.log(results);

  return results;
}
