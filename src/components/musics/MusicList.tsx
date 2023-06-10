import { useEffect, useState } from "react";
import { getMusics } from "../../api/gastronomies.api";

import '../../styles/Table.css'
import { MusicForm } from "./MusicForm";
import { Musics } from "./Music.interfaces";
import { MusicListItem } from "./MusicListItem";

export const MusicList = () => {
  const [musics, setMusics] = useState<Musics[]>([]);
  const [showForm, setShowForm] = useState(false);

  const fetchMusics = async () => {
    const musics = await getMusics();
    setMusics(musics);
  };

  useEffect(() => {
    fetchMusics();
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
        <MusicForm setShowForm={setShowForm} fetchMusics={fetchMusics} />
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
            {musics.map((music) => (
              <MusicListItem key={music.id} {...music} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
