import './App.css';
import Navber from './navigation/Navber';
import "./styles/global.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Servicepage from './pages/Servicepage';
import Footer from './footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Navber />}>
            <Route index element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Service" element={<Servicepage />} />
      
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;