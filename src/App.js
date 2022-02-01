import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import PlanetProvider from './contex/providers/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <Header />
      <Table />
    </PlanetProvider>
  );
}

export default App;
