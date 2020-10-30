import React, { useEffect, useState } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import List from './List';

function App() {
  const [state, setState] = useState([
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

  const names = ['Peter', 'Paul', 'Mary'];

  useEffect(() => {
    setTimeout(() => {
      const newState = [...state];
      newState[1].title = 'Have fun';

      setState(newState);
      console.log('title was changed');
    }, 5000);
    return () => {
      // unmount logic
    };
  }, []); // dependecies array

  return (
    <div className="App">
      <HelloWorld names={names} />
      <List logs={state} />
    </div>
  );
}

export default App;
