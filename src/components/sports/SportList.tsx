import { useEffect, useState } from "react";
import { getSports } from "../../api/gastronomies.api";

import '../../styles/Table.css'
import { Sport } from "./Sport.interfaces";
import { SportForm } from "./SportForm";
import { SportListItem } from "./SportListItem";

export const SportList = () => {
  const [sports, setSports] = useState<Sport[]>([]);
  const [showForm, setShowForm] = useState(false);

  const fetchSports = async () => {
    const sports = await getSports();
    setSports(sports);
  };

  useEffect(() => {
    fetchSports();
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
        <SportForm setShowForm={setShowForm} fetchSports={fetchSports} />
      )}

      <div className="containerT">
        <h1 className="containerT-title">Eventos relacionados a deportes</h1>
        <table className="containerT--table">
          <thead className="containerT--table-head">
            <tr>
              <th scope="">Nombre</th>
              <th scope="">Imagen</th>
              <th scope="">Descripción</th>
              <th scope="">Lugar</th>
              <th scope="">Fecha</th>
              <th scope="">Hora</th>
              <th>
                <button onClick={handleClick}>Agregar</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sports.map((sport) => (
              <SportListItem key={sport.id} {...sport} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
