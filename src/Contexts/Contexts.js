import React from 'react';

export const SettingsContext = React.createContext();

export const SettingsContextProvider = ({ children }) => {
  const saveToLocalStorage = (name, value) => {
    localStorage.setItem(name, value);
  };

  const getOrSetLocalStorage = (name, value) => {
    if (localStorage.getItem(name) != null) return localStorage.getItem(name);

    saveToLocalStorage(name, value);
    return localStorage.getItem(name);
  };

  const [settingsContext, setSettingsContext] = React.useState({
    urlBackground: getOrSetLocalStorage('urlBackground', ''),
    saveToLocalStorage: saveToLocalStorage,
  });

  const updateBackgroundUrl = (newUrl) => setSettingsContext({ ...settingsContext, urlBackground: newUrl });

  return <SettingsContext.Provider value={{ ...settingsContext, updateBackgroundUrl }}>{children}</SettingsContext.Provider>;
};
