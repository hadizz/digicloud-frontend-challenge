import React, { useEffect, useState } from 'react';
import { ITabData } from '../../Components/Tab';
import randomApiService from '../../../Services/RandomApiSerivce';
import useIsMounted from '../../../Hooks/useIsMounted';
import provideContactsListData from './Helpers/provideContactsListData';
import Tabs from '../../Components/Tabs';
import { IContactsListData } from './ContactsList.types';
import { ContactsListInitialState } from './Constants';

const ContactsList = () => {
  const [contacts, setContacts] = useState<IContactsListData[]>(
    ContactsListInitialState,
  );
  const [activeTab, setActiveTab] = useState<string>('a');

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isMounted = useIsMounted();

  const handleOnChangeTabs = (tab: ITabData, index: number) => {
    setContacts(
      [...contacts].map((tb, idx) => ({ ...tb, active: idx === index })),
    );
    setActiveTab(tab.value);
  };

  const getContactsListData = async () => {
    try {
      const contactsResponse = await randomApiService.getUsersList({
        results: 10,
      });
      if (!isMounted) return;
      const contactsResults = contactsResponse.data.results;
      const contactsListBookList = provideContactsListData(contactsResults);
      setContacts(contactsListBookList);
      setIsLoading(false);
    } catch (e) {
      // send error to sentry
    }
  };

  useEffect(() => {
    getContactsListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="m-4">
      <Tabs
        loading={isLoading}
        data={contacts}
        activeTab={activeTab}
        onChange={handleOnChangeTabs}
      >
        {(currentTab, tab: any) => {
          return (
            <div>
              {tab?.users?.map((user: any) => (
                <div>
                  {user.name.first} {user.name.last}
                </div>
              ))}
            </div>
          );
        }}
      </Tabs>
    </div>
  );
};

export default ContactsList;
