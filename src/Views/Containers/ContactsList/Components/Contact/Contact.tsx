import React, { useContext, useEffect, useState } from 'react';
import { IContactProps } from './Contact.types';
import classes from './Contact.module.sass';
import ContactDetails from '../ContactDetails';
import { UsersContext } from '../../../../../Core/Context/Users';

const Contact = ({ key, contact }: IContactProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const { currentUsername, setCurrentUsername } = useContext(UsersContext);

  useEffect(() => {
    setShowDetails(currentUsername === contact.login?.username);
  }, [currentUsername, setCurrentUsername, contact.login?.username]);

  const handleOnClick = () => {
    setShowDetails(true);
    setCurrentUsername(contact.login?.username);
  };

  const handleOnCloseDetails = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setShowDetails(false);
  };

  return (
    <div
      key={key}
      role="menuitem"
      tabIndex={0}
      className={classes.root}
      onClick={handleOnClick}
    >
      <div className={classes.name}>
        {contact?.name?.first}, {contact?.name?.last.toUpperCase()}
      </div>
      {showDetails ? (
        <div className={classes.details}>
          <ContactDetails contact={contact} onClose={handleOnCloseDetails} />
        </div>
      ) : null}
    </div>
  );
};

export default Contact;
