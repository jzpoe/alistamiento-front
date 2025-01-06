import { useContext, useState } from "react";
import "./ingreso.css";
import { MyContext } from "../../context/Context";
import Swal from "sweetalert2";

const Ingreso = () => {
  const {
    HandleEnviar,
    nombre,
    setNombre,
    guia,
    setGuia,
    valor,
    setValor,
    fecha,
    setFecha,
    error,
  } = useContext(MyContext); // Importar el hook personalizado

  const handleEnviado = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    try {
      // Aquí se llama al manejador HandleEnviar
      await HandleEnviar();

      // Después de enviar correctamente, muestra el mensaje de éxito
      Swal.fire({
        title: "¡Hecho!",
        text: "¡Se ha enviado correctamente!",
        icon: "success",
        confirmButtonText: "Aceptar",
      });

    } catch (error) {
      // Si ocurre un error al enviar
      Swal.fire({
        title: "Error",
        text: "Hubo un error al enviar la información.",
        icon: "error",
        confirmButtonText: "Intentar nuevamente",
      });
    }
  };

  

  return (
    <div className="parent">
      <form onSubmit={handleEnviado} className="container-formulario">
        <label className="container-label" htmlFor="nombre">
          Nombre
        </label>
        <input
          className="container-input"
          id="nombre"
          placeholder="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label className="container-label" htmlFor="guia">
          Guía
        </label>
        <input
          className="container-input"
          id="guia"
          placeholder="guía"
          type="number"
          value={guia}
          onChange={(e) => setGuia(e.target.value)}
        />

        <label className="container-label" htmlFor="valor">
          Valor
        </label>
        <input
          className="container-input"
          id="valor"
          placeholder="valor"
          type="text"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />

        <label className="container-label" htmlFor="fecha">
          Fecha
        </label>
        <input
          className="container-input"
          id="fecha"
          placeholder="fecha"
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <label className="container-label" htmlFor="foto">
          Foto
        </label>
        <input className="container-input" id="foto" type="file" />

        <button className="boton-login" type="submit">
          Ingresar
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Mostrar mensaje de error si existe */}
      <div className="container-foto">Foto</div>
    </div>
  );
};

export default Ingreso;
