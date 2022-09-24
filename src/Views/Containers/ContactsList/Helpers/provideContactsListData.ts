import { IUser } from '../../../../Models/Entity/IUser';
import isArraySecure from '../../../../Helpers/Object/isArraySecure';

export interface IReturnProvideContactsListData {
  label: string;
  value: string;
  count: number;
  users: IUser[];
}

const provideContactsListData = (
  data: IUser[],
): IReturnProvideContactsListData[] => {
  if (!isArraySecure(data)) return [];

  const familyLetter = (user: IUser) => user.name.last[0].toLowerCase();

  const groups: Record<string, Partial<IUser>[]> = {};

  data.forEach((user) => {
    if (groups?.[familyLetter(user)]) {
      const users = groups[familyLetter(user)];
      groups[familyLetter(user)] = [...users, user];
    } else {
      groups[familyLetter(user)] = [user];
    }
  });

  return Object.entries(groups)
    .map(([key, value]) => ({
      label: `${key} (${value.length})`,
      value: key,
      count: value.length,
      users: value,
    }))
    .sort((a, b) =>
      a.value.localeCompare(b.value),
    ) as IReturnProvideContactsListData[];
};

export default provideContactsListData;
