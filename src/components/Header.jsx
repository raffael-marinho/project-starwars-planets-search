import React, { useContext } from 'react';
import Contex from '../contex/Contex';

function Header() {
  const { filterByName, setFilterByName } = useContext(Contex);

  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        value={ filterByName.name }
        type="text"
        data-testid="name-filter"
        onChange={ (event) => setFilterByName({ name: event.target.value }) }
      />
    </div>
  );
}

export default Header;
