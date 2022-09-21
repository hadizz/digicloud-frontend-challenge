import { TGender } from '../../Entity/TGender';
import { TNationality } from '../../Entity/TNationality';

export interface IRequestUsersList {
  results: number;
  gender: TGender;
  seed: string;
  nat: TNationality;
  page: number;
}
