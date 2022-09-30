import generateTestId from './generateTestId';
import { DATA_TESTID } from './generateTestId.constants';

test('generateTestId tests', () => {
  expect(generateTestId()).toMatchObject({});
  expect(generateTestId('')).toMatchObject({});
  expect(generateTestId(1)).toMatchObject({ [DATA_TESTID]: '1' });
  expect(generateTestId('name')).toMatchObject({ [DATA_TESTID]: 'name' });
});
