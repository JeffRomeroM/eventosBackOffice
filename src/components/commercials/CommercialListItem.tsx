import { deleteCommercial } from '../../api/gastronomies.api';
import '../../styles/Table.css'

interface CommercialListItemProps {
  id: string;
  title: string;
  image: string;
  owner: string;
  message: string;
  place: string;
  date: string;
  callAction: string;
}

export const CommercialListItem = ({
  id,
  title,
  image,
  owner,
  message,
  place,
  date,
  callAction,
}: CommercialListItemProps) => {
 
  
  return (
    <tr key={id} className="color-row">
      <td scope="row">{title}</td>
      <td>{image}</td>
      <td>{owner}</td>
      <td>{message}</td>
      <td>{place}</td>
      <td>{date}</td>
      <td>{callAction}</td>
      <td>
        
        <button >Eliminar</button>
      </td>
      
    </tr>
  );
};
