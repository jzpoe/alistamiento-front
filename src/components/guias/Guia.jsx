import { useContext } from "react";
import "./guia.css";
import { MyContext } from "../../context/Context"; // Asegúrate de importar correctamente

const Guia = () => {
  const { datos } = useContext(MyContext); // Accede a los datos globales

  return (
    <>
      <div className="container-input-guia">
        <label className="container-label-guia" htmlFor="">
          Buscar
        </label>
        <input placeholder="🔍" className="container-input-guia" type="text" />
      </div>

      <div className="cards-container">
        {datos.length > 0 ? (
          datos.map((item) => (
            <div className="card" key={item._id}>
              <div className="card-content">
                <label className="card-label">Nombre:</label>
                <p>{item.nombre}</p>

                <label className="card-label">Guía:</label>
                <p>{item.guia}</p>

                <label className="card-label">Fecha:</label>
                <p>{new Date(item.fecha).toLocaleDateString()}</p>
              </div>
              <div className="card-photo">Foto</div>
            </div>
          ))
        ) : (
          <p>No hay datos disponibles</p>
        )}
      </div>
    </>
  );
};

export default Guia;