import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useContext } from 'react';
import context from '../context/MyContext';
import '../styles/Table.css';

function TableComp() {
  const { filterByNameByNumberBySort, loading } = useContext(context);
  if (loading) return <p>Carregando...</p>;

  if (filterByNameByNumberBySort.length > 0) {
    const keys = Object.keys(filterByNameByNumberBySort[0]);
    return (
      <div className="Table">
        <Table>
          <TableHead>
            <TableRow>
              {
                keys.map((key) => (
                  <TableCell
                    style={ { color: 'white', borderBottom: '1px solid rgb(81,81,81)' } }
                    data-testid="tableHeaders"
                    key={ key }
                  >
                    {key}
                  </TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              filterByNameByNumberBySort.map((planet) => (
                <TableRow data-testid="tableBodys" key={ planet.name }>
                  {keys.map((key) => (
                    <TableCell
                      style={ { color: 'white',
                        borderBottom: '1px solid rgb(81,81,81)' } }
                      data-testid={ key === 'name' ? 'planet-name' : '' }
                      key={ key }
                    >
                      {planet[key]}

                    </TableCell>
                  ))}
                </TableRow>
              ))
            }
          </TableBody>
        </Table>

      </div>
    );
  }
}

export default TableComp;
