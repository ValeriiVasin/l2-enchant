export function roundMap<T>(map: Map<T, number>): Map<T, number> {
  return new Map([...map.entries()].map(([key, value]) => [key, Math.round(value)]));
}
