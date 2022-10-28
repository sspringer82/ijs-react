import React, { useState, ReactNode, FC, useContext } from 'react';
import { createContext } from 'react';
import Person from './Person';

type PersonContextType = [
  Person[],
  React.Dispatch<React.SetStateAction<Person[]>>
];

const PersonContext = createContext<PersonContextType | null>(null);

type Props = {
  children?: ReactNode;
};

const PersonProvider: FC<Props> = ({ children }) => {
  const personState = useState<Person[]>([]);

  return (
    <PersonContext.Provider value={personState}>
      {children}
    </PersonContext.Provider>
  );
};

function usePersonContext(): PersonContextType {
  const context = useContext(PersonContext);
  return context as PersonContextType;
}

export { PersonProvider, usePersonContext };
