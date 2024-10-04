import { createContext, useContext, useState } from 'react';

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
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03c9d7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);

  const setColor = e => {
    setCurrentColor(e.target.value);
    console.log(e.target.value);
    localStorage.setItem('color', e.target.value);
    setThemeSettings(false);
  };

  const setMode = e => {
    setCurrentMode(e.target.value);
    localStorage.setItem('mode', e.target.value);
    setThemeSettings(false);
  };

  const handleClick = type => {
    setIsClicked({ ...initialState, [type]: true });
  };

  return (
    <stateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        handleClick,
        screenSize,
        setScreenSize,
        setColor,
        setMode,
        currentMode,
        currentColor,
        themeSettings,
        setThemeSettings,
        setCurrentMode,
        setCurrentColor,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
