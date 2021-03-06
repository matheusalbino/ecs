import { size, clampSize, isEmptySize } from '../';

describe('Size', () => {
  test('size(number, number)', () => {
    expect(size(0, 0)).toStrictEqual(expect.objectContaining({ width: 0, height: 0 }));
    expect(size(10, -10)).toMatchObject({ width: 10, height: -10 });
  });

  describe('Size Operations', () => {
    test('clampPoint(Size, min, max)', () => {
      const value = size(10, -10);
      const min = size(0, 0);
      const max = size(1, 1);

      expect(clampSize(value, min, max)).toMatchObject({ width: 1, height: 0 });
    });

    test('isEmptySize(Size)', () => {
      expect(isEmptySize(size(0, 0))).toEqual(true);
      expect(isEmptySize(size(32, 32))).toEqual(false);
    });
  });
});
