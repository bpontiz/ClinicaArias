import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<>
          <Navigation />
        </>} />
        <Route path='' element='' />
        <Route path='' element='' />
        <Route path='' element='' />
      </Routes>
    </Router>
  );
}

export default App;
