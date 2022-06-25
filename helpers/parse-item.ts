import type { ParsedItem } from '../types';

const levelRegexp = /Ур.(\d+)/;
const parseLevel = (item: string): number => {
  const match = item.match(levelRegexp);
  return match ? Number(match[1]) : 0;
};

const enchantRegexp = /\+(\d+)$/;
const parseEnchant = (item: string): number => {
  const match = item.match(enchantRegexp);
  return match ? Number(match[1]) : 0;
};

const parseBase = (item: string): string => {
  return item.replace(levelRegexp, '').replace(enchantRegexp, '').trim();
};

export function parseItem(item: string): ParsedItem {
  return { base: parseBase(item), level: parseLevel(item), enchant: parseEnchant(item) };
}
