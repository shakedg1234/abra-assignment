import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { MyNavbar } from './components/Navber';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaceProvider from './context/PlaceContext';
import { Route, Routes } from 'react-router-dom';
import { PlaceForm } from './components/PlaceForm';
function App() {
  return (
       <>
    <MyNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<PlaceForm />} />
    </Routes>
  </>
  );
}

export default App;
