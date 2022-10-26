import React, { createContext, useState } from 'react';

const DarkModeContext = createContext();

function DarkMode({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div>
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
          {children}
        </DarkModeContext.Provider>
      </div>
    </>
  )
}

export { DarkMode, DarkModeContext }

