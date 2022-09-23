import React from 'react';

interface IAppProvidersProps {
  children: any;
}

// you can define redux, toast and other providers in this folder, then import here
const AppProviders: React.FC<IAppProvidersProps> = ({ children }) => {
  return <div className="digiCloudApp">{children}</div>;
};

export default AppProviders;
