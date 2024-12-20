import { Route, Routes } from 'react-router-dom';
import './App.css';
import Ingreso from './components/ingreso-guias/Ingreso';
import Login from './components/login/login';
import Navbar from './components/navbar/Navbar';
import Devolver from './components/devolver/Devolver';
import Guia from './components/guias/Guia';
import { MyProvider } from './context/Context';



function App() {
  return (
    <MyProvider>
      <Navbar />
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/ingreso" element={<Ingreso />} />
      <Route path="/guias" element={<Guia />} />
        
         {/*         
        <Route path="/devolver" element={<Devolver />} />
         */}
         <Route path='/devolver' element={<Devolver/>}></Route>
      </Routes>
    </MyProvider>
  );
}

export default App;
