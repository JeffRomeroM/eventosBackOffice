import { useState } from "react";
import {  postSport } from "../../api/gastronomies.api";
import '../../styles/Form.css'
import 'animate.css';

export const SportForm = ({
  setShowForm,
  fetchSports,
}: {
  setShowForm: (value: boolean) => void;
  fetchSports: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    place: "",
    date: "",
    time: "",
  });

  const onChange = (e) => {
    const newState = {
      [e.target.name]: e.target.value,
    };

    setForm({ ...form, ...newState });
  };



  const onSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    postSport({ ...form }).then((resp) => {
      setIsLoading(false);
      setShowForm(false);
      fetchSports();
    });
  };

  return (
    <div className="container animate__animated animate__slideInLeft">

      <form onSubmit={onSubmit} className="container--form">
        <h2>Nuevo evento de gastronomía</h2>
        <div className="container--form-input">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            value={form.name}
            onChange={onChange}
            type="text"
            className="form-control"
            id="name"
            name="name"
          />
        </div>

        <div className="container--form-input">
          <label htmlFor="name" className="form-label">
            Imagen
          </label>
          <input
            value={form.image}
            onChange={onChange}
            type="string"
            className="form-control"
            id="image"
            name="image"
          />
        </div>

        <div className="container--form-input">
          <label htmlFor="name" className="form-label">
            Descripción
          </label>
          <input
            value={form.description}
            onChange={onChange}
            type="text"
            className="form-control"
            id="description"
            name="description"
          />
        </div>

        <div className="container--form-input">
          <label htmlFor="name" className="form-label">
            Lugar
          </label>
          <input
            value={form.place}
            onChange={onChange}
            type="string"
            className="form-control"
            id="place"
            name="place"
          />
        </div>

        <div className="container--form-input">
          <label htmlFor="name" className="form-label">
            Fecha
          </label>
          <input
            value={form.date}
            onChange={onChange}
            type="date"
            className="form-control"
            id="date"
            name="date"
          />
        </div>
        <div className="container--form-input">
          <label htmlFor="name" className="form-label">
            Hora
          </label>
          <input
            value={form.time}
            onChange={onChange}
            type="time"
            className="form-control"
            id="time"
            name="time"
          />
        </div>

        <div className="container--form-input">
        <input
          type="submit"
          value={isLoading ? "Guardando..." : "Guardar"}
          disabled={isLoading}
        />

        <button onClick={() => setShowForm(false)} className="btn-cancelar">Cancelar</button>
        </div>

        
      </form>
    </div>
  );
};
