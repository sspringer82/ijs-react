import Log from './shared/Log';

export default function fetchData(): Promise<Log[]> {
  return Promise.resolve([
    {
      id: 1,
      from: '08:00',
      until: '09:00',
      title: 'Breakfast',
      duration: 1,
    },
    {
      id: 2,
      from: '09:00',
      until: '11:00',
      title: 'Work',
      duration: 2,
    },
  ]);
}

// fetchData().then(data => {
//   setState(data);
// })
