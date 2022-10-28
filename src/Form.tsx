import React, { useEffect } from 'react';
import { InputPerson } from './Person';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const initialPerson: InputPerson = {
  firstName: '',
  lastName: '',
  birthdate: '',
  street: '',
  city: '',
  zipCode: '',
};

type Props = {
  id?: number | null;
  onSave: (person: InputPerson) => void;
  onCancel: () => void;
};

const Form: React.FC<Props> = ({ id, onSave, onCancel }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<InputPerson>({
    defaultValues: initialPerson,
  });

  useEffect(() => {
    if (id) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`)
        .then((response) => response.json())
        .then((data) => reset(data));
    }
  }, [id, reset]);

  function onSubmit(person: InputPerson) {
    onSave(person);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        first name:{' '}
        <input
          type="text"
          {...register('firstName', {
            required: true,
            minLength: 2,
            maxLength: 20,
          })}
        />{' '}
        <ErrorMessage errors={errors} name="firstName" />
      </label>
      <label>
        last name: <input type="text" {...register('lastName')} />{' '}
      </label>
      <label>
        birth date: <input type="text" {...register('birthdate')} />{' '}
      </label>
      <label>
        street: <input type="text" {...register('street')} />{' '}
      </label>
      <label>
        city: <input type="text" {...register('city')} />{' '}
      </label>
      <label>
        zip code: <input type="text" {...register('zipCode')} />{' '}
      </label>
      <button type="submit">save</button>
      <button type="reset" onClick={onCancel}>
        cancel
      </button>
    </form>
  );
};

export default Form;
