import React, { createContext, useMemo, useState } from 'react';

interface UsersContextInterface {
  openedUserModal: string;
  setOpenedUserModal: Function;
}

const initialUsersContext: UsersContextInterface = {
  openedUserModal: '',
  setOpenedUserModal: () => {},
};

export const UsersContext = createContext<UsersContextInterface>(
  initialUsersContext as UsersContextInterface,
);

interface UsersContextProviderProps {
  children: JSX.Element;
}

const UsersContextProvider = ({ children }: UsersContextProviderProps) => {
  const [openedUserModal, setOpenedUserModal] = useState<string>('');

  const state = useMemo<UsersContextInterface>(
    () => ({ openedUserModal, setOpenedUserModal }),
    [openedUserModal, setOpenedUserModal],
  );

  return (
    <UsersContext.Provider value={state}>{children}</UsersContext.Provider>
  );
};

export default UsersContextProvider;
