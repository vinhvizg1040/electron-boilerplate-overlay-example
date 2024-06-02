import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Overlay from './components/Overlay';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overlay />} />
      </Routes>
    </Router>
  );
}
