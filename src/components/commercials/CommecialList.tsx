import { useEffect, useState } from "react";
import { getCommercials } from "../../api/gastronomies.api";
import { Commercial } from "./commercial.interfaces";
import '../../styles/Table.css'
import { CommercialListItem } from "./CommercialListItem";
import { CommercialForm } from "./CommercialForm";

export const CommercialList = () => {
  const [commercials, setCommercials] = useState<Commercial[]>([]);
  const [showForm, setShowForm] = useState(false);

  const fetchCommercials = async () => {
    const commercials = await getCommercials();
    setCommercials(commercials);
  };

  useEffect(() => {
    fetchCommercials();
  }, []);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  // if (gastronomies.length === 0) {
  //   return <h2>No hay eventos sobre gasgtronomia</h2>;
  // }

  return (
    <div>
      {showForm && (
        <CommercialForm setShowForm={setShowForm} fetchCommercials={fetchCommercials} />
      )}

      <div className="containerT">
        <h1 className="containerT-title">Anuncios Publicitarios</h1>
        <table className="containerT--table">
          <thead className="containerT--table-head">
            <tr>
              <th scope="">Titulo</th>
              <th scope="">Imagen</th>
              <th scope="">Owner</th>
              <th scope="">Mensaje</th>
              <th scope="">Lugar</th>
              <th scope="">Fecha</th>
              <th scope="">Llamado a la accion</th>
              <th>
                <button onClick={handleClick}>Agregar</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {commercials.map((commercial) => (
              <CommercialListItem key={commercial.id} {...commercial} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
