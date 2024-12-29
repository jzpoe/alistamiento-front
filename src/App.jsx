import { Route, Routes } from 'react-router-dom';
import './App.css';
import Ingreso from './components/ingreso-guias/Ingreso';
import Navbar from './components/navbar/Navbar';
import Devolver from './components/devolver/Devolver';
import Guia from './components/guias/Guia';
import { ContextLogin } from './context/ContextLogin';
import { MyProvider } from './context/Context';
import { ProtectedRoute } from './context/ProtectedRoute';
import { Login } from './components/login/login';

function App() {
    return (
        <ContextLogin>
            <MyProvider>
                <Navbar />
                <Routes>
                    {/* Ruta principal */}
                    <Route path="/" element={<Login/>} />

                    {/* Rutas protegidas */}
                    <Route path="/ingreso" element={<ProtectedRoute element={Ingreso} />} />
                    <Route path="/guias" element={<ProtectedRoute element={Guia} />} />
                    <Route path="/devolver" element={<ProtectedRoute element={Devolver} />} />
                </Routes>
            </MyProvider>
        </ContextLogin>
    );
}

export default App;
