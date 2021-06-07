import React, { createContext, ReactNode, useState } from "react";

interface DarkModeContextData {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext({} as DarkModeContextData);

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    console.log("PAssei aqui");
    setIsDarkMode((oldState) => !oldState);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
