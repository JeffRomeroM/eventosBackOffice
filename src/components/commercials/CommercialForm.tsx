import { useState } from "react";
import '../../styles/Form.css'
import 'animate.css';
import { postCommercial } from "../../api/gastronomies.api";

export const CommercialForm = ({
  setShowForm,
  fetchCommercials,
}: {
  setShowForm: (value: boolean) => void;
  fetchCommercials: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const [form, setForm] = useState({
    title: "",
    image: "",
    owner: "",
    message: "",
    place: "",
    date: "",
    callAction: "",
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

    postCommercial({ ...form }).then((resp) => {
      setIsLoading(false);
      setShowForm(false);
      fetchCommercials();
    });
  };

  return (
    <div className="container animate__animated animate__slideInLeft">

      <form onSubmit={onSubmit} className="container--form">
        <h2>Nuevo anuncio</h2>
        <div className="container--form-input">
          <label htmlFor="title" className="form-label">
            Titulo 
          </label>
          <input
            value={form.title}
            onChange={onChange}
            type="text"
            className="form-control"
            id="title"
            name="title"
          />
        </div>

        <div className="container--form-input">
          <label htmlFor="name" className="form-label">
            Imagen
          </label>
          <input
            value={form.image}
            onChange={onChange}
            type="text"
            className="form-control"
            id="image"
            name="image"
            placeholder="Pega el enlace de la imagen"
          />
        </div>

        <div className="container--form-input">
          <label htmlFor="name" className="form-label">
            Owner
          </label>
          <input
            value={form.owner}
            onChange={onChange}
            type="string"
            className="form-control"
            id="owner"
            name="owner"
          />
        </div>

        <div className="container--form-input">
          <label htmlFor="name" className="form-label">
            Mensage
          </label>
          <input
            value={form.message}
            onChange={onChange}
            type="string"
            className="form-control"
            id="message"
            name="message"
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
            type="string"
            className="form-control"
            id="date"
            name="date"
          />
        </div>
        <div className="container--form-input">
          <label htmlFor="name" className="form-label">
            Llamado a la accion
          </label>
          <input
            value={form.callAction}
            onChange={onChange}
            type="string"
            className="form-control"
            id="callAction"
            name="callAction"
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
