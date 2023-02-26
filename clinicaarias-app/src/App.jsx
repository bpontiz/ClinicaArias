import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation.jsx';
import IntroVideo from './Components/IntroVideo/IntroVideo.jsx';
import About from './Components/About/About.jsx';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<>
          <IntroVideo />
          <About />
        </>} />
        <Route path='' element='' />
        <Route path='' element='' />
        <Route path='' element='' />
      </Routes>
    </Router>
  );
}



export default App;
