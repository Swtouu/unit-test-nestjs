import { merge } from './merge.service';

describe('merge', () => {
  it('case 1. sort max to min', () => {
    const collection1 = [10, 15, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const collection2 = [0, 1, 2];
    const collection3 = [0, 3, 6, 5];

    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual([
      15, 10, 9, 8, 7, 6, 6, 5, 5, 4, 3, 3, 2, 2, 1, 1, 0, 0,
    ]);
  });

  it('case 2. sort min to max', () => {
    const collection1 = [5, 4];
    const collection2 = [0, 1];
    const collection3 = [0, 3, 0];

    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual([5, 4, 3, 1, 0, 0, 0]);
  });

  it('case 3. handle empty value', () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];

    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual([]);
  });
});
