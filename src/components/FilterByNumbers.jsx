import { Button, FormControl, InputLabel, MenuItem, Select,
  TextField } from '@mui/material';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import context from '../context/MyContext';
import '../styles/FilterByNumbers.css';

function FilterByNumbers() {
  const { handleClickFilterBtn, numberFilters } = useContext(context);

  const [column, setColumn] = useState('population');
  const [comparasion, setComparasion] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('0');
  const [optionsColumn, setOptionsColumn] = useState([]);

  const handleChangeNumberInput = ({ target }) => {
    if (target.id === 'columnFilter') {
      setColumn(target.value);
    }
    if (target.id === 'comparasionFilter') {
      setComparasion(target.value);
    }
    if (target.id === 'valueFilter') {
      setValueFilter(target.value);
    }
  };

  const options = useMemo(() => (['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']), []);

  useEffect(() => {
    const optionsAbled = options.filter(
      (option) => !numberFilters.some((numberFilter) => numberFilter.column === option),
    );
    setOptionsColumn(optionsAbled);
    setColumn(optionsAbled[0]);
  }, [numberFilters, options]);

  return (
    <div className="filter-comp">
      <FormControl
        variant="standard"
        style={ { margin: '0 2rem' } }
        sx={ {
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: 'white',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
          },
        } }
      >
        <InputLabel
          id="columnLabel"
          color="secondary"
          sx={ { color: 'rgb(255, 255, 255, 0.7)' } }
        >
          Coluna

        </InputLabel>
        <Select
          labelId="columnLabel"
          label="Coluna"
          name="columnFilter"
          id="columnFilter"
          data-testid="column-filter"
          onChange={ handleChangeNumberInput }
          value={ column }
          sx={ { color: '#FFFFFF',
            '& .MuiSelect-icon': {
              color: 'white',
            },
          } }
          color="secondary"
        >
          {optionsColumn.map((optionColumn) => (
            <MenuItem key={ optionColumn } value={ optionColumn }>
              {optionColumn}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        style={ { margin: '0 2rem' } }
        variant="standard"
        sx={ { '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottomColor: 'white',
        },
        '& .MuiInput-underline:before': {
          borderBottomColor: 'white',
        } } }
      >
        <InputLabel
          id="operadorLabel"
          color="secondary"
          sx={ { color: 'rgb(255, 255, 255, 0.7)' } }
        >
          Operador

        </InputLabel>
        <Select
          labelId="operadorLabel"
          label="Operador"
          name="comparasionFilter"
          id="comparasionFilter"
          data-testid="comparison-filter"
          onChange={ handleChangeNumberInput }
          value={ comparasion }
          sx={ { color: '#FFFFFF',
            '& .MuiSelect-icon': {
              color: 'white',
            },
          } }
          color="secondary"
        >
          <MenuItem value="maior que">maior que</MenuItem>
          <MenuItem value="menor que">menor que</MenuItem>
          <MenuItem value="igual a">igual a</MenuItem>
        </Select>
      </FormControl>
      <TextField
        style={ { margin: '0 2rem' } }
        name="valueFilter"
        id="valueFilter"
        data-testid="value-filter"
        onChange={ handleChangeNumberInput }
        value={ valueFilter }
        variant="outlined"
        inputProps={ {
          style: { color: 'white', width: '70px' } } }
        type="number"
        color="secondary"
        sx={ {
          '& fieldset ': {
            borderColor: 'white',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgb(255, 255, 255, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFFF00',
            } } } }
      />
      <Button
        style={ { margin: '0 2rem' } }
        data-testid="button-filter"
        variant="outlined"
        onClick={ async () => {
          handleClickFilterBtn({ column, comparasion, valueFilter });
        } }
        color="secondary"
      >
        Filtrar

      </Button>
    </div>
  );
}

export default FilterByNumbers;
