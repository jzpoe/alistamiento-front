import { Route, Routes } from 'react-router-dom';
import './App.css';
import Ingreso from './components/ingreso-guias/Ingreso';
import Navbar from './components/navbar/Navbar';
import Devolver from './components/devolver/Devolver';
import Guia from './components/guias/Guia';
import { MyProvider } from './context/Context';
import Login from './components/login/login';



function App() {
  return (
    <MyProvider>
      <Navbar />
      <Routes>
      <Route path="/" element={<Login/>} />
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
