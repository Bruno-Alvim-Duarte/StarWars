import { Button, FormControl, InputLabel, MenuItem, Select,
  TextField } from '@mui/material';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import context from '../Context/MyContext';

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
    if (target.id === 'valueFilter' && Number(target.value) >= 0) {
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
    <div style={ { display: 'flex', alignItems: 'center' } }>
      <FormControl
        variant="standard"
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
          style={ { color: 'white' } }
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
            '& .MuiSelect-standard': {
              borderBottomColor: 'white',
              borderBottomWidth: '2px',
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
        name="valueFilter"
        id="valueFilter"
        data-testid="value-filter"
        onChange={ handleChangeNumberInput }
        value={ valueFilter }
        variant="outlined"
        inputProps={ { inputMode: 'numeric',
          pattern: '[0-9]*',
          style: { color: 'white', width: '30px' } } }
        color="secondary"
        sx={ {
          '& fieldset ': {
            borderColor: 'white',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFFF00',
            } } } }
      />
      <Button
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
