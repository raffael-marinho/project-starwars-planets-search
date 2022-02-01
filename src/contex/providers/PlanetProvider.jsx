import React, { useState, useEffect } from 'react';
import getPlanets from '../../services/api';
import Contex from '../Contex';

function PlanetProvider(prop) {
  const { children } = prop;
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  useEffect(() => {
    async function loadingPromises() {
      const promises = await getPlanets();
      setData((promises));
    }
    loadingPromises();
  }, []);

  return (
    <Contex.Provider value={ { data, filterByName, setFilterByName } }>
      {children}
    </Contex.Provider>
  );
}

export default PlanetProvider;
