export function mergeMaps<T>(...maps: Array<Map<T, number>>): Map<T, number> {
  const result: Map<T, number> = new Map();

  for (const map of maps) {
    for (const [key, value] of map) {
      if (!result.has(key)) {
        result.set(key, value);
        continue;
      }

      result.set(key, result.get(key)! + value);
    }
  }

  return result;
}
