import Log from './shared/Log';

export default async function fetchData(): Promise<Log[]> {
  const response = await fetch('http://localhost:3001/logs');
  const data = await response.json();

  return data;

  // return Promise.resolve([
  //   {
  //     id: 1,
  //     from: '08:00',
  //     until: '09:00',
  //     title: 'Breakfast',
  //     duration: 1,
  //   },
  //   {
  //     id: 2,
  //     from: '09:00',
  //     until: '11:00',
  //     title: 'Work',
  //     duration: 2,
  //   },
  // ]);
}

// fetchData().then(data => {
//   setState(data);
// })

export async function deleteEntry(id: number): Promise<boolean> {
  const response = await fetch(`http://localhost:3001/logs/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.status === 200;
}
