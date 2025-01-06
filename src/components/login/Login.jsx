import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  './login.css'
import { useAuth } from '../../context/ContextLogin';


export const Login = () => {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null);
  const { login } = useAuth(); // Accede al método login desde el contexto

  const navigate = useNavigate();


const handleSubmit = async (e) => {
  e.preventDefault();

  if(!usuario || !password){
    setError('Todos los campos son obligatorios')
    return
  }

  try {
    const response = await fetch('https://alistamiento-front.vercel.app/api/login', {
    //const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json'
      },
      credentials: 'include', // Incluye cookies en las solicitudes
      body: JSON.stringify({usuario, password})
    });

    const data = await response.json();
    if(response.ok){

      login(); // Autenticar al usuario
      navigate('/ingreso'); // Redirigir a la página principal
      console.log('Login exitoso', data);

    }else {
      // Error en la autenticación
      alert('Credenciales incorrectas');
      setError(data.message || 'Credenciales incorrectas');
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    setError('Error al iniciar sesión');
  }

}



  return (
    <form onSubmit={handleSubmit} className='container-formulario' >
        <label className='container-label' htmlFor="">Usuario </label>
            <input className='container-input' 
            placeholder='usuario' 
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            />
        
        <label className='container-label' htmlFor="">Contraseña</label>
            <input className='container-input ' 
            placeholder='contraseña' 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        
      
        
        <button className='boton-login' type='submit' >ingresar</button>
        
    </form>
  )
}

