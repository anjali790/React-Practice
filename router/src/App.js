import './App.css';
import { Routes,Route } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Context from './components/Context'

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/:id' element={<Context/>}/>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
