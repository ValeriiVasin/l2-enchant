import { compareItems } from './compare-items';

export function isLess(left: string, right: string): boolean {
  return compareItems(left, right) === -1;
}
