import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio,
  RadioGroup, Select } from '@mui/material';
import React, { useContext, useState } from 'react';
import context from '../context/MyContext';
import '../styles/Order.css';

function Order() {
  const [column, setColumn] = useState('population');
  const [sort, setSort] = useState('ASC');

  const { handleClickSort } = useContext(context);

  return (
    <div
      className="order-comp"
    >
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
          id="columnSort"
          color="secondary"
          sx={ { color: 'rgb(255, 255, 255, 0.7)' } }
        >
          Ordenar
        </InputLabel>
        <Select
          label="Ordenar"
          labelId="columnSort"
          name="columnSort"
          id="columnSort"
          data-testid="column-sort"
          value={ column }
          onChange={ ({ target }) => setColumn(target.value) }
          color="secondary"
          style={ { color: 'white' } }
          sx={ { color: '#FFFFFF',
            '& .MuiSelect-icon': {
              color: 'white',
            },
          } }
        >
          <MenuItem value="population">population</MenuItem>
          <MenuItem value="orbital_period">orbital_period</MenuItem>
          <MenuItem value="diameter">diameter</MenuItem>
          <MenuItem value="rotation_period">rotation_period</MenuItem>
          <MenuItem value="surface_water">surface_water</MenuItem>
        </Select>
      </FormControl>

      <FormControl style={ { margin: '0 2rem' } }>
        <RadioGroup color="error" defaultValue="ASC">
          <FormControlLabel
            control={ <Radio
              sx={ { color: 'white',
                '&.Mui-checked': {
                  color: '#FFFF00',
                } } }
            /> }
            label="Ascendente"
            name="sortRule"
            id="sortRuleASC"
            data-testid="column-sort-input-asc"
            value="ASC"
            onChange={ () => setSort('ASC') }
          />

          <FormControlLabel
            control={ <Radio
              sx={ { color: 'white',
                '&.Mui-checked': {
                  color: '#FFFF00',
                } } }
            /> }
            label="Descendente"
            name="sortRule"
            id="sortRuleDESC"
            data-testid="column-sort-input-desc"
            value="DESC"
            onChange={ () => setSort('DESC') }
          />
        </RadioGroup>
      </FormControl>

      <Button
        style={ { margin: '0 2rem' } }
        variant="outlined"
        data-testid="column-sort-button"
        onClick={ () => handleClickSort(column, sort) }
        color="secondary"
      >
        Ordenar

      </Button>
    </div>
  );
}

export default Order;
