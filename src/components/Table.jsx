import React, { useContext } from 'react';
import context from '../Context/MyContext';

function Table() {
  const { filterByNameByNumber, loading } = useContext(context);
  if (loading) return <p>Carregando...</p>;

  if (filterByNameByNumber.length > 0) {
    const keys = Object.keys(filterByNameByNumber[0]);
    return (
      <table>
        <thead>
          <tr>
            {
              keys.map((key) => (
                <th key={ key }>{key}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            filterByNameByNumber.map((planet) => (
              <tr key={ planet.name }>
                {keys.map((key) => (
                  <td key={ key }>{planet[key]}</td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

export default Table;
