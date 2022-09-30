import { IUser } from '../../../../../Models/Entity/IUser';

export interface IContactProps {
  contact: Partial<IUser>;
  key: number;
}
