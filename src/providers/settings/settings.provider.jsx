import React, { createContext, useState } from 'react';

export const SettingsContext = createContext({
  settingItems: [],
  setSettings: () => {}
});

const SettingsProvider = ({ children }) => {
  const [settingItems, setSettings] = useState([]);

  return (
    <SettingsContext.Provider value={{ settingItems, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
