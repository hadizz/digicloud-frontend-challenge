import generateClassName from './generateClassName';

test('generateClassName tests', () => {
  expect(generateClassName([])).toBe('');
  expect(generateClassName()).toBe('');
  expect(generateClassName(['', false, undefined, 0])).toBe('');

  expect(generateClassName([1, 2, 3])).toBe('1 2 3');
  expect(generateClassName(['1', 0, 3])).toBe('1 3');
  // @ts-ignore
  expect(generateClassName(['1' === 1, 0 && '0', 3 === 2 && '3'])).toBe('');
  // eslint-disable-next-line no-self-compare
  expect(generateClassName([1 === 1])).toBe('true');

  const a = true;
  const b = false;
  const c = true;
  expect(
    generateClassName([a && b && 'class-1', a && c ? 'class-2' : 'class-3']),
  ).toBe('class-2');

  expect(generateClassName(['class-1', 'class-2', 'class-3', 'class-4'])).toBe(
    'class-1 class-2 class-3 class-4',
  );

  expect(
    generateClassName(['class-1', 'class-2', a && b && 'class-3', 'class-4']),
  ).toBe('class-1 class-2 class-4');
});
