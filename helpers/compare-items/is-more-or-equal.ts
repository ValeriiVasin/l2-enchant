import { compareItems } from './compare-items';

export function isMoreOrEqual(left: string, right: string): boolean {
  return compareItems(left, right) >= 0;
}
