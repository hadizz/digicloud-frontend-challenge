import { IName } from './IName';
import { ILocation } from './ILocation';
import { ILogin } from './ILogin';
import { IPicture } from './IPicture';
import { IDateAge } from './IDateAge';
import { IId } from './IId';

export interface IUser {
  gender: string;
  name: IName;
  location: ILocation;
  email: string;
  login: ILogin;
  dob: IDateAge;
  registered: IDateAge;
  phone: string;
  cell: string;
  id: IId;
  picture: IPicture;
  nat: string;
}
