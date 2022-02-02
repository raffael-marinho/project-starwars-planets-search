import React, { useContext } from 'react';
import Contex from '../contex/Contex';

function Table() {
  const { filterByNumericValues, data, filterByName } = useContext(Contex);
  console.log(data);
  // const retornaFiltro = () => {
  //   let string = '';
  //   if (filterByNumericValues.filterByNumericValues.length > 0) {
  //     string += 'date.';
  //     string += `${filterByNumericValues.filterByNumericValues[0].column}`;
  //     const tern2 = (
  //       filterByNumericValues
  //         .filterByNumericValues[0].comparison === 'menor que' ? '<' : '=');
  //     string += `${filterByNumericValues
  //       .filterByNumericValues[0].comparison === 'maior que' ? '>' : tern2}`;
  //     string += `${filterByNumericValues.filterByNumericValues[0].value}`;
  //     return string;
  //   }
  //   return 'true';
  // };

  // const concatFiltro = () => {
  // }

  const retornaFiltro2 = (date) => {
    if (filterByNumericValues.filterByNumericValues.length > 0) {
      const amoled = filterByNumericValues.filterByNumericValues[0];
      if (amoled.comparison === 'maior que') {
        return date[amoled.column]
         > Number(amoled.value);
      }
      if (amoled.comparison === 'menor que') {
        return date[amoled.column]
         < Number(amoled.value);
      }
      return date[amoled.column] === amoled.value;
    }
    return true;
  };

  // useEffect(() => {
  //   // retornaFiltro();
  //   if (filterByNumericValues.filterByNumericValues.length > 0) {
  //     console.log(retornaFiltro());
  //   }
  // }, [filterByNumericValues.filterByNumericValues]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {data.length !== 0 ? Object.keys(data[0])
              .filter((date) => date !== 'residents')
              .map((dat, index) => <th key={ index }>{dat}</th>) : null}
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 ? (data)
            .filter((date) => date.name.includes(filterByName.name))
            .filter((date) => retornaFiltro2(date))
            .map((dat, index) => (
              <tr key={ index }>
                <td>{dat.name}</td>
                <td>{dat.rotation_period}</td>
                <td>{dat.orbital_period}</td>
                <td>{dat.diameter}</td>
                <td>{dat.climate}</td>
                <td>{dat.gravity}</td>
                <td>{dat.terrain}</td>
                <td>{dat.surface_water}</td>
                <td>{dat.population}</td>
                <td>{dat.films}</td>
                <td>{dat.created}</td>
                <td>{dat.edited}</td>
                <td>{dat.url}</td>
              </tr>)) : null}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
