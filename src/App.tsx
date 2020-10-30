import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import List from './List';

import styles from './App.module.css';

function App() {
  const names = ['Peter', 'Paul', 'Mary'];

  return (
    <div className="App">
      {/* <HelloWorld names={names} /> */}

      <h1 className={styles.mainHeadline} style={{ color: 'lightgreen' }}>
        Our fancy timelogger
      </h1>
      <List />
    </div>
  );
}

export default App;
