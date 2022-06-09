import './App.css';
import { Header } from './components/Header';
import "../src/css/estilo.css";
import "../src/js/scripts.js";
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Descripcion } from './components/Descripcion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fotos } from './components/Fotos';
import { Servicios } from './components/Servicios';
import { Contacto } from './components/Contacto';
import { Login } from './components/Intranet/Login';
//import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/descripcion" element={<Descripcion/>} />
          <Route exact path="/servicios" element={<Servicios/>} />
          <Route exact path="/fotos" element={<Fotos/>} />
          <Route exact path="/contacto" element={<Contacto/>} />
          <Route exact path="/intranet" element={<Login/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
