import { Item } from '../items';
import { compareItems } from './compare-items/compare-items';
import { isLess } from './compare-items/is-less';
import { isLessOrEqual } from './compare-items/is-less-or-equal';
import { isMoreOrEqual } from './compare-items/is-more-or-equal';
import { parseItem } from './parse-item';

export function itemsRange(low: Item, high: Item): Array<Item> {
  if (parseItem(low).base !== parseItem(high).base) {
    throw new Error('Items in range should have the same base');
  }

  if (!isLess(low, high)) {
    throw new Error('Low item in range should have lower level and/or lower enchant');
  }

  return Object.values(Item)
    .filter((item) => isMoreOrEqual(item, low) && isLessOrEqual(item, high))
    .sort(compareItems);
}
