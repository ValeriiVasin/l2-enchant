import { parseItem } from './parse-item';

const compare = (left: number, right: number): number => {
  if (left === right) {
    return 0;
  }

  return left < right ? -1 : 1;
};

export function compareItems(left: string, right: string): number {
  const leftParsed = parseItem(left);
  const rightParsed = parseItem(right);

  if (leftParsed.base !== rightParsed.base) {
    return leftParsed.base.localeCompare(rightParsed.base);
  }

  if (leftParsed.level !== rightParsed.level) {
    return compare(leftParsed.level, rightParsed.level);
  }

  return compare(leftParsed.enchant, rightParsed.enchant);
}
