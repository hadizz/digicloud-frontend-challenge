import React, { createContext, useMemo, useState } from 'react';

interface UsersContextInterface {
  currentUsername: string;
  setCurrentUsername: Function;
}

const initialUsersContext: UsersContextInterface = {
  currentUsername: '',
  setCurrentUsername: () => {},
};

export const UsersContext = createContext<UsersContextInterface>(
  initialUsersContext as UsersContextInterface,
);

interface UsersContextProviderProps {
  children: JSX.Element;
}

const UsersContextProvider = ({ children }: UsersContextProviderProps) => {
  const [currentUsername, setCurrentUsername] = useState<string>('');

  const state = useMemo<UsersContextInterface>(
    () => ({ currentUsername, setCurrentUsername }),
    [currentUsername, setCurrentUsername],
  );

  return (
    <UsersContext.Provider value={state}>{children}</UsersContext.Provider>
  );
};

export default UsersContextProvider;
