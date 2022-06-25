import { compareItems } from './compare-items';

export function isEqual(left: string, right: string): boolean {
  return compareItems(left, right) === 0;
}
