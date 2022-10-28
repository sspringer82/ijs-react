import React from 'react';
import Person from '../Person';

type Params = {
  person: Person;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

const ListItem: React.FC<Params> = ({ person, onDelete, onEdit }) => {
  return (
    <tr>
      <td data-testid="firstName">{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>{person.birthdate}</td>
      <td>{person.street}</td>
      <td>{person.city}</td>
      <td>{person.zipCode}</td>
      <td>
        <button onClick={() => onDelete(person.id)} data-testid="delete-btn">
          delete
        </button>
      </td>
      <td>
        <button onClick={() => onEdit(person.id)} data-testid="edit-btn">
          edit
        </button>
      </td>
    </tr>
  );
};

export default ListItem;
