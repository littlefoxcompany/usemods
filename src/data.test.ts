import { expect, test } from 'vitest';
import * as mod from './data';

const arrayExample = [{ name: 'John', age: 25 },{ name: 'Jane', age: 30 },{ name: 'Jake', age: 20 }];

const objectExample: { name: string; age: number; country: string } = {
  name: 'John',
  age: 25,
  country: 'USA'
};

const nestedArray = [1, [2, 3], [4, [5, 6]]];
const duplicateArray = [1, 2, 2, 3, 4, 5, 5, 5];
const stringArray = ['apple', 'banana', 'apple', 'cherry', 'banana'];
const mixedArray = [1, 2, 3, 4, 5];

test('dataSortBy', () => {
  // Empty Property
  expect(mod.dataSortBy(arrayExample)).toStrictEqual([
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jake', age: 20 }
  ]);

  // Sort by age
  expect(mod.dataSortBy(arrayExample, { property: 'age' })).toStrictEqual([
    { name: 'Jake', age: 20 },
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 }
  ]);

  // Sort by age desc
  expect(mod.dataSortBy(arrayExample, { property: 'age', order: 'desc' })).toStrictEqual([
    { name: 'Jane', age: 30 },
    { name: 'John', age: 25 },
    { name: 'Jake', age: 20 }
  ]);

  expect(mod.dataSortBy(arrayExample, { property: 'name' })).toStrictEqual([
    { name: 'Jake', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'John', age: 25 }
  ]);
});

test('dataReverse', () => {
  const arrayExample = [{ name: 'John', age: 25 },{ name: 'Jane', age: 30 },{ name: 'Jake', age: 20 }];
  expect(mod.dataReverse(arrayExample)).toStrictEqual([
    { name: 'Jake', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'John', age: 25 }
  ]);
  expect(mod.dataReverse(objectExample)).toMatchObject({
    country: 'USA',
    age: 25,
    name: 'John',
  });

  // Empty Items
  expect(mod.dataReverse([])).toStrictEqual([]);
});

test('dataRemoveDuplicates', () => {
  expect(mod.dataRemoveDuplicates(duplicateArray)).toStrictEqual([1, 2, 3, 4, 5]);
  expect(mod.dataRemoveDuplicates(stringArray)).toStrictEqual(['apple', 'banana', 'cherry']);
});

test('dataFlatten', () => {
  expect(mod.dataFlatten(nestedArray)).toStrictEqual([1, 2, 3, 4, 5, 6]);

  // Objects
  expect(mod.dataFlatten({ a: { b: 1 }, c: { d: 2 } })).toStrictEqual({ b: 1, d: 2 });

  // Empty Items
  expect(mod.dataFlatten([])).toStrictEqual([]);
});

test('dataWithout', () => {
  expect(mod.dataWithout(mixedArray, [2, 4])).toStrictEqual([1, 3, 5]);
  expect(mod.dataWithout(mixedArray, 2)).toStrictEqual([1, 3, 4, 5]);
});