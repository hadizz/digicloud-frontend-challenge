import { IRequestUsersList } from '../../Models/Api/Request/IRequestUsersList';
import { IResponseUsersList } from '../../Models/Api/Response/IResponseUsersList';
import httpService from '../../Core/HttpService';

const randomApiService = {
  /**
   * get users list
   *
   * @category RandomApi
   * @version 1.0.0
   * */
  getUsersList: (params?: Partial<IRequestUsersList>) =>
    httpService.get<IResponseUsersList>('', { params }),
};

export default randomApiService;
