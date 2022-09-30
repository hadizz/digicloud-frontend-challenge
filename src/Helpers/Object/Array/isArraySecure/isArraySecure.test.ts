import isArraySecure from './isArraySecure';

test('isArraySecure tests', () => {
  expect(isArraySecure()).toBeFalsy();
  expect(isArraySecure([])).toBeFalsy();
  expect(isArraySecure([''])).toBeFalsy();
  expect(isArraySecure([[]])).toBeFalsy();
  expect(isArraySecure([{}])).toBeFalsy();
  expect(isArraySecure([['']])).toBeFalsy();
  expect(isArraySecure([['', false], false, ''])).toBeFalsy();
  expect(isArraySecure([['', false], false, '', 0])).toBeTruthy(); // [0]
  expect(isArraySecure([[{}], {}])).toBeFalsy();
  expect(isArraySecure([[{}], {}, { a: 1 }])).toBeTruthy();
  expect(isArraySecure([1, 2, 3])).toBeTruthy();
  expect(isArraySecure(['0'])).toBeTruthy();
  expect(isArraySecure([0])).toBeTruthy();
  expect(isArraySecure([{ name: 'hadi' }])).toBeTruthy();
});
