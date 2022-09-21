import axios, { AxiosRequestConfig } from 'axios';
import { RANDOM_USER_BASE_URL } from '../../Constants/Api/Api';
import { IResponseData } from '../../Models/Data/IResponseData';

// It should be BASE_URL that is dynamically reading data from environment
// But for now it's good.
axios.defaults.baseURL = RANDOM_USER_BASE_URL;

// For this assessment, we only have one api documentation.
// So, I hardcode the response data for preventing of duplicate code.
const httpService = {
  get: <T = any, D = any>(url: string, config?: AxiosRequestConfig<D>) =>
    axios.get<IResponseData<T>>(url, config),
  // You can add post, put, delete if you want. I didn't need it yet!
};

export default httpService;
