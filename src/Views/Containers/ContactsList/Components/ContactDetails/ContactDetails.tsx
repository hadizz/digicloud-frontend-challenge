import React from 'react';
import { IContactDetailsProps } from './ContactDetails.types';
import Col from '../../../../Layouts/Col';
import Row from '../../../../Layouts/Row';
import classes from './ContractDetails.module.sass';

const ContactDetails = ({ contact, onClose }: IContactDetailsProps) => {
  return (
    <aside className={classes.root}>
      <div className={classes.ribbon}>USERNAME {contact.login?.username}</div>
      <Row className={classes.row}>
        <Col col={3} sm={12} className={classes.image}>
          <div
            onClick={onClose}
            role="button"
            aria-label="close button"
            className="closeButton"
          />
          <img src={contact.picture?.medium} alt={contact.name?.first} />
        </Col>
        <Col col={9} sm={12} className={classes.info}>
          <div className={classes.heading}>
            {contact.name?.last.toUpperCase()}, {contact.name?.first}
          </div>
          <Row className={classes.list}>
            <Col col={2} sm={3} className="text-bold">
              e-mail
            </Col>
            <Col col={10} sm={9}>
              {contact?.email}
            </Col>
            <Col col={2} sm={3} className="text-bold">
              phone
            </Col>
            <Col col={10} sm={9}>
              {contact?.phone}
            </Col>
            <Col col={2} sm={3} className="text-bold">
              e-street
            </Col>
            <Col col={10} sm={9}>
              {contact?.location?.street?.number}{' '}
              {contact?.location?.street?.name}
            </Col>
            <Col col={2} sm={3} className="text-bold">
              city
            </Col>
            <Col col={10} sm={9}>
              {contact?.location?.city}
            </Col>
            <Col col={2} sm={3} className="text-bold">
              state
            </Col>
            <Col col={10} sm={9}>
              {contact?.location?.state}
            </Col>
            <Col col={2} sm={3} className="text-bold">
              postcode
            </Col>
            <Col col={10} sm={9}>
              {contact?.location?.postcode}
            </Col>
          </Row>
        </Col>
      </Row>
    </aside>
  );
};

export default ContactDetails;
