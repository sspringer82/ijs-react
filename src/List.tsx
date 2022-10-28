import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Form from './Form';
import ListItem from './ListItem/ListItem';
import Person from './Person';
import usePerson from './usePerson';

const url = `${process.env.REACT_APP_BACKEND_URL}/users`;

async function getPersons(): Promise<Person[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Response not OK');
  }
  const data = await response.json();
  return data;
}

async function removePerson(id: number): Promise<void> {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Response not OK');
  }
}

const List: React.FC = () => {
  const queryClient = useQueryClient();

  const { handleSave } = usePerson();

  const { data: persons } = useQuery(['persons'], getPersons, {
    suspense: true,
  });

  const mutation = useMutation(removePerson, {
    onSuccess() {
      queryClient.invalidateQueries(['persons']);
    },
  });

  function handleDelete(id: number) {
    mutation.mutate(id);
  }

  const [form, setForm] = useState<{ edit: number | null; showForm: boolean }>({
    edit: null,
    showForm: false,
  });

  function handleEdit(id: number): void {
    setForm({ edit: id, showForm: true });
  }

  function clearAndHideForm(): void {
    setForm({ edit: null, showForm: false });
  }

  function handleNew(): void {
    setForm({ edit: null, showForm: true });
  }

  return (
    <>
      {form.showForm && (
        <Form
          id={form.edit}
          onSave={(formData) => {
            handleSave(formData);
            clearAndHideForm();
          }}
          onCancel={clearAndHideForm}
        />
      )}
      <table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>birth date</th>
            <th>street</th>
            <th>city</th>
            <th>zip code</th>
          </tr>
        </thead>
        <tbody>
          {persons?.map((person) => (
            <ListItem
              key={person.id}
              person={person}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>
      <button
        onClick={handleNew}
        style={{
          position: 'sticky',
          bottom: 20,
          left: '90%',
        }}
      >
        new
      </button>
    </>
  );
};

export default List;
