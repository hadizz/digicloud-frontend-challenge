import React, { useEffect, useState } from 'react';
import { ITabData } from '../../Components/Tab';
import useIsMounted from '../../../Hooks/useIsMounted';
import provideContactsListData from './Helpers/provideContactsListData';
import Tabs from '../../Components/Tabs';
import { IContactsListData } from './ContactsList.types';
import { ContactsListInitialState } from './Constants';
import Contact from './Components/Contact';
import classes from './ContractsList.module.sass';
import randomApiService from '../../../Services/RandomApiSerivce';

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
        results: 150,
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
    <div className={classes.root}>
      <Tabs
        loading={isLoading}
        data={contacts}
        activeTab={activeTab}
        onChange={handleOnChangeTabs}
      >
        {(currentTab, tab) => {
          return (
            <ul className={classes.contacts}>
              {tab?.users?.map((contact, key) => (
                <li>
                  <Contact key={key} contact={contact} />
                </li>
              ))}
            </ul>
          );
        }}
      </Tabs>
    </div>
  );
};

export default ContactsList;
