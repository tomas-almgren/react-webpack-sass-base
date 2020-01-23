import React from 'react';
import Header from "./components/header/header";
import MainContent from "./components/mainContent/mainContent";
import styles from './styles/main.scss';

const App = () => (
  <div className={styles["resizeable-both"]}>
    <Header/>
    <MainContent/>
  </div>
);

export default App;
