import React,{useContext} from 'react';
import { DarkModeContext } from '../contexts/DarkMode';

export default function Footer() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <>
      <div className={darkMode ? "header-dark" : "header-light"}>
        <h1>Footer</h1>
      </div>
    </>
  )
}
