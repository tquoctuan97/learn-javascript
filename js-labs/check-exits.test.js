import { checkIfAllEven } from './check-exits';

describe('CheckIfAllEvent', () => {
  test('should return false when not an array', () => {
    expect(checkIfAllEven(1)).toBe(false);
    expect(checkIfAllEven('')).toBe(false);
    expect(checkIfAllEven({})).toBe(false);
    expect(checkIfAllEven(null)).toBe(false);
    expect(checkIfAllEven(undefined)).toBe(false);
  });

  test('should return false when empty', () => {
    expect(checkIfAllEven([])).toBe(false);
  });

  test('should return false when array has no even number', () => {
    expect(checkIfAllEven([1, 3, 5, 7])).toBe(false);
  });

  test('should return false when array has some even numbers', () => {
    expect(checkIfAllEven([2, 4, 6, 8, 9])).toBe(false);
  });

  test('should return true when array has all even numbers', () => {
    expect(checkIfAllEven([2, 4, 6, 8, 10])).toBe(true);
  });
});
