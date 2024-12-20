import './ingreso.css';

const Ingreso = () => {
  return (
    <div className="parent">
      <form className="container-formulario">
        <label className="container-label" htmlFor="nombre">Nombre</label>
        <input className="container-input" id="nombre" placeholder="nombre" type="text" />

        <label className="container-label" htmlFor="guia">Guía</label>
        <input className="container-input" id="guia" placeholder="guía" type="number" />

        <label className="container-label" htmlFor="valor">Valor</label>
        <input className="container-input" id="valor" placeholder="valor" type="text" />

        <label className="container-label" htmlFor="fecha">Fecha</label>
        <input className="container-input" id="fecha" placeholder="fecha" type="text" />

        <label className="container-label" htmlFor="foto">Foto</label>
        <input className="container-input" id="foto" type="file" />

        <button className="boton-login">Ingresar</button>
      </form>

      <div className="container-foto">
        Foto
      </div>
    </div>
  );
};

export default Ingreso;