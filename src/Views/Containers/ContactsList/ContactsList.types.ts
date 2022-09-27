import { ITabData } from '../../Components/Tab';
import { IUser } from '../../../Models/Entity/IUser';

export interface IContactsListData extends ITabData {
  users: IUser[];
  count: number;
}
