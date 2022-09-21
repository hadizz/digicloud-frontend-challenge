export type TRandomAPIVersions = '1.0' | '1.1' | '1.2' | '1.3' | '1.4';

export interface IInfo {
  seed: string;
  results: number;
  page: number;
  version: TRandomAPIVersions;
}
