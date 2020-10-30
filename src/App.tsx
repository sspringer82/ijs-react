import React, { useState } from 'react';
import './App.css';
import List from './List';

import styles from './App.module.css';
import DarkModeContext from './DarkMode';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <DarkModeContext.Provider value={darkMode}>
      <button onClick={() => setDarkMode(!darkMode)}>toggle dark mode</button>
      <div className="App">
        {/* <HelloWorld names={names} /> */}

        <h1 className={styles.mainHeadline} style={{ color: 'lightgreen' }}>
          Our fancy timelogger
        </h1>
        <List />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
