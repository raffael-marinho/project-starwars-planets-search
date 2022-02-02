import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Table from './components/Table';
import PlanetProvider from './contex/providers/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <Header />
      <Main />
      <Table />
    </PlanetProvider>
  );
}

export default App;
