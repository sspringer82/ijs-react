import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import List from './List';

function App() {
  const names = ['Peter', 'Paul', 'Mary'];

  return (
    <div className="App">
      <HelloWorld names={names} />
      <List />
    </div>
  );
}

export default App;
