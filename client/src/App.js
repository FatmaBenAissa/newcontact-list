import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Userlist from './components/Userlist';
import About from './components/About';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import { getusers } from './redux/userslice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const dispatch=useDispatch();
  const [ping, setping] = useState(false)
  useEffect(() => {
       dispatch(getusers())
  }, [ping])
  
  return (
    <div className="App">
      <Navbarr ping={ping} setping={setping}/>
    <Routes>
        <Route path="/" element={ <Userlist ping={ping} setping={setping}/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
