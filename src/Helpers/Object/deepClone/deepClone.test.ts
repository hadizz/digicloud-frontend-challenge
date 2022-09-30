import deepClone from './deepClone';

test('deepClone tests', () => {
  const obj = { a: { name: 'hadi' }, b: 2, c: { d: [1, 2, 3, 4] } };
  const deepObj = deepClone(obj);
  expect(obj === deepObj).toBeFalsy();

  expect(obj.b === deepObj.b).toBeTruthy();
  deepObj.b = 3;
  expect(obj.b === deepObj.b).toBeFalsy();

  expect(obj.c.d === deepObj.c.d).toBeFalsy();
});
