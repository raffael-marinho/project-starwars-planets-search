import React, { useContext } from 'react';
import Contex from '../contex/Contex';

function Table() {
  const { data } = useContext(Contex);
  console.log(data);
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
            .filter((date) => date !== 'residents')
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
