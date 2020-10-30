import React, { useEffect, useState } from 'react';
import fetchData from './fetchData';
import ListItem from './ListItem';
import Log from './shared/Log';

const List: React.FC = () => {
  const [state, setState] = useState<Log[]>([]);

  function handleDelete(id: number) {
    setState((prevState) => {
      const newState = prevState.filter((log) => log.id !== id);
      return newState;
    });
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
