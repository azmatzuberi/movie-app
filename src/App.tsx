import React from 'react';
import Home from '../src/pages/Home'
import styles from './css/styles.module.css'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className={styles.headline}>Movie Search</h1>
     <Home />
    </div>
  );
}

export default App;
