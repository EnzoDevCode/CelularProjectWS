import React, { createContext, useState, useContext } from 'react';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  return (
    <HeaderContext.Provider value={{ isHeaderHovered, setIsHeaderHovered }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => useContext(HeaderContext);
