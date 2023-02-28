import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation.jsx';
import IntroVideo from './Components/IntroVideo/IntroVideo.jsx';
import About from './Components/About/About.jsx';
import Specialities from './Components/Specialities/Specialities';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<>
          <IntroVideo />
          <About />
          <Specialities />
        </>} />
        <Route path='/especialidades' element={<Specialities />} />
        <Route path='' element='' />
        <Route path='' element='' />
      </Routes>
    </Router>
  );
}



export default App;
