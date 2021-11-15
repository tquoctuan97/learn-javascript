import { getDivisorListV1, getDivisorListV2, getDivisorListV3 } from './getDivisorList';

describe('getDivisorListV1', () => {
  test('should teturn undefined when not a number', () => {
    expect(getDivisorListV1('')).toBe(undefined);
    expect(getDivisorListV1(null)).toBe(undefined);
    expect(getDivisorListV1(undefined)).toBe(undefined);
    expect(getDivisorListV1([])).toBe(undefined);
  });
  test('should return undefined when 1 <= n <= 1000', () => {
    expect(getDivisorListV1(-1)).toBe(undefined);
    expect(getDivisorListV1(1001)).toBe(undefined);
  });

  test('should return result', () => {
    expect(getDivisorListV1(1)).toEqual([1]);
    expect(getDivisorListV1(10)).toEqual([1, 2, 5, 10]);
    expect(getDivisorListV1(12)).toEqual([1, 2, 3, 4, 6, 12]);
  });
});

describe('getDivisorListV2', () => {
  test('should teturn undefined when not a number', () => {
    expect(getDivisorListV2('')).toBe(undefined);
    expect(getDivisorListV2(null)).toBe(undefined);
    expect(getDivisorListV2(undefined)).toBe(undefined);
    expect(getDivisorListV2([])).toBe(undefined);
  });
  test('should return undefined when 1 <= n <= 1000', () => {
    expect(getDivisorListV2(-1)).toBe(undefined);
    expect(getDivisorListV2(1001)).toBe(undefined);
  });

  test('should return result', () => {
    expect(getDivisorListV2(1)).toEqual([1]);
    expect(getDivisorListV2(10)).toEqual([1, 2, 5, 10]);
    expect(getDivisorListV2(12)).toEqual([1, 2, 3, 4, 6, 12]);
  });
});

describe('getDivisorListV3', () => {
  test('should teturn undefined when not a number', () => {
    expect(getDivisorListV3('')).toBe(undefined);
    expect(getDivisorListV3(null)).toBe(undefined);
    expect(getDivisorListV3(undefined)).toBe(undefined);
    expect(getDivisorListV3([])).toBe(undefined);
  });
  test('should return undefined when 1 <= n <= 1000', () => {
    expect(getDivisorListV3(-1)).toBe(undefined);
    expect(getDivisorListV3(1001)).toBe(undefined);
  });

  test('should return result', () => {
    expect(getDivisorListV3(1)).toEqual([1]);
    expect(getDivisorListV3(10)).toEqual([1, 2, 5, 10]);
    expect(getDivisorListV3(12)).toEqual([1, 2, 3, 4, 6, 12]);
  });
});
