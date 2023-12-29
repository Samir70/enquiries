import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Enquiries from './components/Enquiries';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/enquiries">Enquiries</Link>
            </li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path='/'  />
            <Route path='/enquiries' element={<Enquiries />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
