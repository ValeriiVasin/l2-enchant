/**
 * resolve amount of items represented in more low-level items
 *
 * Should be used on iterative items resolution from lowest to greatest
 */

import { mergeMaps } from './merge-maps';
import { multiplyMap } from './multiply-map';

export function resolveItems<T>(
  input: Map<T, number>,
  resolutions: Map<T, Map<T, number>>,
): Map<T, number> {
  let result: Map<T, number> = new Map(input);

  let hasChanges = true;
  while (hasChanges) {
    hasChanges = false;

    let nextResult: Map<T, number> = new Map();
    for (const [key, value] of result) {
      const resolved = resolutions.get(key);

      if (!resolved) {
        nextResult.set(key, value);
        continue;
      }

      hasChanges = true;
      nextResult = mergeMaps(nextResult, multiplyMap(resolved, value));
    }

    result = nextResult;
  }

  return result;
}
