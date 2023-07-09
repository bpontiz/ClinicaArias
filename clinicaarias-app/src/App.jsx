import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation.jsx';
import IntroVideo from './Components/IntroVideo/IntroVideo.jsx';
import About from './Components/About/About.jsx';
import Specialities from './Components/Specialities/Specialities.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<>
          <IntroVideo />
          <About />
          <Specialities />
          <Footer />
        </>} />
        <Route path='/especialidades' element={<Specialities />} />
        <Route path='' element='' />
        <Route path='' element='' />
      </Routes>
    </Router>
  );
}

// Secretaria rellena un formulario con nombre, telefono, correo, descripcion para envio automatico y recordatorio de turno por whapp y gmail. El formulario va a estar en la misma pagina (se muestra a pacientyes ?) 

export default App;
