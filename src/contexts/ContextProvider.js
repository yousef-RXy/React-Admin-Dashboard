import react, { createContext, useContext, useState } from 'react';

const stateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notifications: false,
};

export const useStateContext = () => useContext(stateContext);

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <stateContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </stateContext.Provider>
  );
};
