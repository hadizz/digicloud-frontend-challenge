import { IInfo } from '../Entity/IInfo';

export interface IResponseData<T = any> {
  results: Array<T>;
  info: IInfo;
}
