import React, { useContext, useState } from 'react';
import Contex from '../contex/Contex';

function Main() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const nomes = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const { filterByNumericValues, setFilterByNumericValues } = useContext(Contex);

  function enviaContex() {
    setFilterByNumericValues({
      filterByNumericValues: [
        ...filterByNumericValues.filterByNumericValues,
        { column, comparison, value }],
    });
  }

  return (
    <div>
      <select
        name=""
        id=""
        value={ column }
        onChange={ (event) => setColumn(event.target.value) }
        data-testid="column-filter"
      >
        {nomes.filter((nome) => !filterByNumericValues.filterByNumericValues
          .find((number) => number.column === nome))
          .map((nome, index) => <option key={ index } value={ nome }>{nome}</option>)}
        {/* <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
      </select>
      <select
        name=""
        id=""
        value={ comparison }
        onChange={ (event) => setComparison(event.target.value) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        value={ value }
        onChange={ (event) => setValue(event.target.value) }
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ enviaContex }
      >
        filtro

      </button>
    </div>
  );
}

export default Main;
