import { compareItems } from './compare-items';

export function isMore(left: string, right: string): boolean {
  return compareItems(left, right) === 1;
}
