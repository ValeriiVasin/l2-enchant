export function multiplyMap<T>(
  map: Map<T, number>,
  multiplier: number,
): Map<T, number> {
  const result = new Map<T, number>();

  for (const [key, value] of map) {
    result.set(key, value * multiplier);
  }

  return result;
}
