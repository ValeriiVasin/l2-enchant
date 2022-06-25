import { compareItems } from './compare-items';

export function isLessOrEqual(left: string, right: string): boolean {
  return compareItems(left, right) <= 0;
}
