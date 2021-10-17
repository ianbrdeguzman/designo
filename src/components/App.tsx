import React from 'react';

import styles from './App.module.scss';

const App = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <h1 className={styles.app__title}>Designo</h1>
    </div>
  );
};

export default App;
