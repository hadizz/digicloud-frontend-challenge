import { DATA_TESTID } from './generateTestId.constants';

interface IGenerateTEstIdReturn {
  'data-testid': string;
}

export default function generateTestId(
  id?: string | number,
): IGenerateTEstIdReturn | {} {
  if (!id) return {};
  return {
    [DATA_TESTID]: `${id}`,
  };
}
