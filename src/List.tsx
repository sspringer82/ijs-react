import React, { useEffect, useState } from 'react';
import fetchData, { deleteEntry } from './fetchData';
import ListItem from './ListItem';
import Log from './shared/Log';
import { Th } from './List.styles';

import './List.scss';

const List: React.FC = () => {
  const [state, setState] = useState<Log[]>([]);

  async function handleDelete(id: number) {
    // fetch(`http://localhost:3001/logs/${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }).then((response) => {
    //   if (response.status === 200) {
    //     setState((prevState) => prevState.filter((log) => log.id !== id));
    //   }
    // });
    // const response = await fetch(`http://localhost:3001/logs/${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // if (response.status === 200) {
    //   setState((prevState) => prevState.filter((log) => log.id !== id));
    // }

    if (await deleteEntry(id)) {
      setState((prevState) => prevState.filter((log) => log.id !== id));
    }
  }

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setState(data);
      console.log('data was fetched');
    })();

    // fetchData()
    //   .then((data) => {
    //     setState(data);
    //     console.log('data was fetched');
    //   })
  }, []);

  return (
    <>
      <h1>Time logging table</h1>
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
