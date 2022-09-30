import React from 'react';
import { IUser } from '../../../../../Models/Entity/IUser';

export interface IContactDetailsProps {
  contact: Partial<IUser>;
  onClose?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
