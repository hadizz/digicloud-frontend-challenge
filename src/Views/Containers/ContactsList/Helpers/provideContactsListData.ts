import { IUser } from '../../../../Models/Entity/IUser';
import isArraySecure from '../../../../Helpers/Object/isArraySecure';
import ENGLISH_ALPHABET from '../../../../Constants/Language/EnglishAlphabet';

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

  const familyFirstLetter = (user: IUser) => user.name.last[0].toLowerCase();

  const groups: Record<string, Partial<IUser>[]> = Object.fromEntries(
    ENGLISH_ALPHABET.map((alp) => [alp, []]),
  );

  data.forEach((user) => {
    if (groups?.[familyFirstLetter(user)]) {
      const users = groups[familyFirstLetter(user)];
      groups[familyFirstLetter(user)] = [...users, user];
    }
  });

  return Object.entries(groups)
    .map(([key, value]) => ({
      label: `${key} (${value.length})`,
      value: key,
      count: value.length,
      users: value,
      disable: value.length === 0,
    }))
    .sort((a, b) =>
      a.value.localeCompare(b.value),
    ) as IReturnProvideContactsListData[];
};

export default provideContactsListData;
