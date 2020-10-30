import React from 'react';
import './App.css';
import List from './List';

import styles from './App.module.css';

function App() {
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
