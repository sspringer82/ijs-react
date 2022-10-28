import { fireEvent, render, screen } from '@testing-library/react';
import Person from '../Person';
import ListItem from './ListItem';

const person: Person = {
  id: 33,
  firstName: 'Heloise',
  lastName: 'Vandervort',
  birthdate: '1942-05-12T05:49:02.557Z',
  street: '268 Rosie Port Suite 454',
  city: 'Waterbury',
  zipCode: '49858-5684',
};

describe('ListItem', () => {
  let onDelete: () => void;
  let onEdit: () => void;

  beforeEach(() => {
    onDelete = jest.fn();
    onEdit = jest.fn();
  });

  it('should render', () => {
    render(
      <table>
        <tbody>
          <ListItem person={person} onEdit={onEdit} onDelete={onDelete} />
        </tbody>
      </table>
    );

    expect(screen.getByTestId('firstName')).toHaveTextContent('Heloise');
  });

  it('should delete a row correctly', () => {
    render(
      <table>
        <tbody>
          <ListItem person={person} onEdit={onEdit} onDelete={onDelete} />
        </tbody>
      </table>
    );

    fireEvent.click(screen.getByTestId('delete-btn'));

    expect(onDelete).toHaveBeenCalled();
    expect(onDelete).toHaveBeenCalledWith(33);
  });
});
