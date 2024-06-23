function applyLimitAndOffset<T>(
  array: T[],
  limit: number,
  offset: number
): T[] {
  return array.slice(offset, offset + limit);
}

export default applyLimitAndOffset;
