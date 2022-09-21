import { AxiosRequestConfig } from 'axios';
import { IResponseData } from './IResponseData';

export default interface IResponse<T = any> {
  data: IResponseData<T>;
  headers: Map<string, string>;
  status: number;
  statusText: string;
  config: AxiosRequestConfig;
  request?: any;
  response?: IResponse<T>;
}
