import React, { createContext, useState } from 'react';

const SocialContext = createContext({
  isEmailFlipped: false,
  setIsEmailFlipped: () => {}
});

export const SocialProvider = ({ children }) => {
  const [isEmailFlipped, setIsEmailFlipped] = useState(false);

  return (
    <SocialContext.Provider value={{ isEmailFlipped, setIsEmailFlipped }}>
      {children}
    </SocialContext.Provider>
  );
};

export const useSocialContext = () => React.useContext(SocialContext);
