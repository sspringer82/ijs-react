import { useState, useEffect } from 'react';
import fetchData, { deleteEntry } from './fetchData';
import Log from './shared/Log';

export default function useLog(): {
  state: Log[];
  handleDelete: (id: number) => Promise<void>;
} {
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

  return {
    state,
    handleDelete,
  };
}
