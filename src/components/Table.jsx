import React, { useContext } from 'react';
import context from '../Context/MyContext';

function Table() {
  const { filterByNameByNumberBySort, loading } = useContext(context);
  if (loading) return <p>Carregando...</p>;

  if (filterByNameByNumberBySort.length > 0) {
    const keys = Object.keys(filterByNameByNumberBySort[0]);
    return (
      <table>
        <thead>
          <tr>
            {
              keys.map((key) => (
                <th data-testid="tableHeaders" key={ key }>{key}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            filterByNameByNumberBySort.map((planet) => (
              <tr data-testid="tableBodys" key={ planet.name }>
                {keys.map((key) => (
                  <td
                    data-testid={ key === 'name' ? 'planet-name' : '' }
                    key={ key }
                  >
                    {planet[key]}

                  </td>
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
