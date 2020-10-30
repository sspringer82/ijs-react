import React from 'react';
import ListItem from './ListItem';
import { Th } from './List.styles';

import './List.scss';
import useLog from './useLog';
import Form from './Form';

const List: React.FC = () => {
  const { state, handleDelete } = useLog();

  return (
    <>
      <h1>Time logging table</h1>
      <hr />
      <Form
        onSave={(data: { title: string; from: string; until: string }) => {
          // insert logic to include it to the state
        }}
      />
      <hr />
      <table>
        <thead>
          <tr>
            <Th>id</Th>
            <Th>from</Th>
            <Th>until</Th>
            <Th>title</Th>
            <Th>duration</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          {state.map((log) => (
            <ListItem log={log} key={log.id} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
