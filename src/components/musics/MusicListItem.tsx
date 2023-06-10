import '../../styles/Table.css'

interface MusicListItemProps {
  id: string;
  name: string;
  image: string;
  description: string;
  place: string;
  date: string;
  time: string;
}

export const MusicListItem = ({
  id,
  name,
  image,
  description,
  place,
  date,
  time,
}: MusicListItemProps) => {
 
  
  return (
    <tr key={id} className="color-row">
      <td scope="row">{name}</td>
      <td>{image}</td>
      <td>{description}</td>
      <td>{place}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>
        <button >Editar</button>
        <button >Eliminar</button>
      </td>
    </tr>
  );
};
