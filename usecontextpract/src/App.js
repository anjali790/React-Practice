import './App.css';
// import {DarkModeContext } from './contexts/DarkMode';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { DarkMode } from './contexts/DarkMode';


function App() {  // const darkMode = useContext(DarkModeContext);
  return (
    <>
      <DarkMode>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </DarkMode>
    </>
  );
}

export default App;
