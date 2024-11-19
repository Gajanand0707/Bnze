import './App.css';
import Navber from './navigation/Navber';
import "./styles/global.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Servicepage from './pages/Servicepage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Navber />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="Service" element={<Servicepage />} />
      
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;