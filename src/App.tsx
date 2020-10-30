import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

function App() {
  const names = ['Peter', 'Paul', 'Mary'];

  return (
    <div className="App">
      <HelloWorld names={names} />
    </div>
  );
}

export default App;
