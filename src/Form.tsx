import React, { ChangeEvent, useState } from 'react';

type FormType = {
  title: string;
  from: string;
  until: string;
};

type Props = {
  onSave: (data: FormType) => void;
};

const Form: React.FC<Props> = ({}) => {
  const [state, setState] = useState<FormType>({
    title: '',
    from: '',
    until: '',
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(state);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const name = e.target.name as keyof FormType;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="from">from: </label>
        <input
          type="text"
          name="from"
          id="from"
          value={state.from}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="until">until: </label>
        <input
          type="text"
          name="until"
          id="until"
          value={state.until}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={state.title}
          onChange={handleChange}
        />
      </fieldset>
      <button type="submit">save</button>
    </form>
  );
};

export default Form;
