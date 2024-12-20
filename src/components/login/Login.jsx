import  './login.css'

export const Login = () => {
  return (
    <form className='container-formulario' >
        <label className='container-label' htmlFor="">Nombre </label>
            <input className='container-input' placeholder='usuario' type="text" />
        
        
       
        <label className='container-label' htmlFor="">Contraseña</label>
            <input className='container-input ' placeholder='contraseña' type="password" />
        
      
        
        <button className='boton-login' >ingresar</button>
        
    </form>
  )
}

