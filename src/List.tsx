import { ReactNode, CSSProperties, ReactElement, useState } from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import Person from './Person';

const persons = new Array(1_000)
  .fill({
    firstName: 'Heloise',
    lastName: 'Vandervort',
    birthdate: '1942-05-12T05:49:02.557Z',
    street: '268 Rosie Port Suite 454',
    city: 'Waterbury',
    zipCode: '49858-5684',
  })
  .map((person, id) => ({ ...person, id }));

function Inner({
  children,
  style,
}: {
  children: ReactNode;
  style: CSSProperties;
}): ReactElement {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: 200 }}>first name</th>
          <th style={{ width: 200 }}>last name</th>
          <th style={{ width: 200 }}>birth date</th>
          <th style={{ width: 200 }}>street</th>
          <th style={{ width: 200 }}>city</th>
          <th style={{ width: 200 }}>zip code</th>
        </tr>
      </thead>
      <tbody style={{ ...style, position: 'absolute', width: '100%' }}>
        {children}
      </tbody>
    </table>
  );
}

function Row({ index, style }: ListChildComponentProps): ReactElement {
  return (
    <tr style={style}>
      <td style={{ width: 50 }}>{persons[index].firstName}</td>
      <td style={{ width: 200 }}>{persons[index].lastaName}</td>
      <td style={{ width: 200 }}>{persons[index].birthDate}</td>
      <td style={{ width: 200 }}>{persons[index].street}</td>
      <td style={{ width: 100 }}>{persons[index].city}</td>
      <td style={{ width: 100 }}>{persons[index].zipCode}</td>
    </tr>
  );
}

export default function MyList() {
  // const [persons, setPersons] = useState<Person[]>([]);
  return (
    <List
      height={300}
      itemCount={persons.length}
      itemSize={30}
      width={750}
      innerElementType={Inner}
    >
      {Row}
    </List>
  );
}
