import React from 'react';

import styles from './App.module.scss';

const App: React.FC<unknown> = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.app__title}>App</h1>
    </div>
  );
};

export default App;