export function mergeMaps<T>(...maps: Array<Map<T, number>>): Map<T, number> {
  const result: Map<T, number> = new Map();

  for (const map of maps) {
    for (const [key, value] of map) {
      const resultValue = result.get(key);

      if (typeof resultValue === 'undefined') {
        result.set(key, value);
        continue;
      }

      result.set(key, resultValue + value);
    }
  }

  return result;
}
