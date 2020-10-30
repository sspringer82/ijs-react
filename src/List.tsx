import React, { useEffect, useState } from 'react';
import fetchData, { deleteEntry } from './fetchData';
import ListItem from './ListItem';
import Log from './shared/Log';

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
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>from</th>
          <th>until</th>
          <th>title</th>
          <th>duration</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {state.map((log) => (
          <ListItem log={log} key={log.id} onDelete={handleDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default List;
