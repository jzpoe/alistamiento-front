import { useContext } from "react";
import "./guia.css";
import { MyContext } from "../../context/Context";
import { MyContext_Hecho } from "../../context/Context_Hecho";
import Swal from "sweetalert2"; // Importar SweetAlert2

const Guia = () => {
  const { datos } = useContext(MyContext);
  const { hecho, HandleHecho } = useContext(MyContext_Hecho);

  const confirmed = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, marcar como hecho",
    }).then((result) => {
      if (result.isConfirmed) {
        HandleHecho(id);
        Swal.fire("¡Hecho!", "Tu guía ha sido marcada como hecha.", "success");
      }
    });
  };

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
            <div
              className={`card ${hecho[item._id] ? "card-hecha" : ""}`} // Aquí se aplica la clase si `hecho` es true
              key={item._id}
            >
              <div className="card-content">
                <label className="card-label">Nombre:</label>
                <p>{item.nombre}</p>

                <label className="card-label">Guía:</label>
                <p>{item.guia}</p>

                <label className="card-label">hecha:</label>
                <p>{item.hecho ? "si" : "no"}</p>

                <label className="card-label">Fecha:</label>
                <p>{new Date(item.fecha).toLocaleDateString()}</p>
              </div>
              <button onClick={() => confirmed(item._id)}>✅</button>
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
