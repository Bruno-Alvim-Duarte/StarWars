import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import renderWithContext from "../helpers/renderWithContext";
import userEvent from "@testing-library/user-event";

describe('Testa os filtros por número', () => {
  it('testa se ao adicionar um filtro de população maior que 1000 aparece somente os corretos', async () => {
    renderWithContext(<App />);

    await waitFor(() => expect(screen.queryByText('Carregando...')).not.toBeInTheDocument(), { timeout: 6000})
    const valueInput = screen.getByTestId('value-filter');
    userEvent.type(valueInput, '1000');
    const filterBtn = screen.getByTestId('button-filter');
    userEvent.click(filterBtn);
    const tbodys = screen.getAllByTestId('tableBodys');
    expect(tbodys).toHaveLength(7);
  });
  it('testa se ao adicionar um filtro de surface_wate menor que 10 aparece somente os corretos', async () => {
    renderWithContext(<App />);

    await waitFor(() => expect(screen.queryByText('Carregando...')).not.toBeInTheDocument(), { timeout: 3000});
    const columnInput = screen.getByTestId('column-filter');
    const comparisonInput = screen.getByTestId('comparison-filter');
    const valueInput = screen.getByTestId('value-filter');
    userEvent.selectOptions(columnInput, 'surface_water');
    userEvent.selectOptions(comparisonInput, 'menor que');
    userEvent.type(valueInput, '10');
    const filterBtn = screen.getByTestId('button-filter');
    userEvent.click(filterBtn);
    const tbodys = screen.getAllByTestId('tableBodys');
    expect(tbodys).toHaveLength(5);
  });
  it('testa se ao adicionar um filtro de population igual a 1000 aparece somente o correto', async () => {
    renderWithContext(<App />);

    await waitFor(() => expect(screen.queryByText('Carregando...')).not.toBeInTheDocument(), { timeout: 6000});
    const columnInput = screen.getByTestId('column-filter');
    const comparisonInput = screen.getByTestId('comparison-filter');
    const valueInput = screen.getByTestId('value-filter');
    userEvent.selectOptions(columnInput, 'population');
    userEvent.selectOptions(comparisonInput, 'igual a');
    userEvent.type(valueInput, '1000');
    const filterBtn = screen.getByTestId('button-filter');
    userEvent.click(filterBtn);
    const tbodys = screen.getAllByTestId('tableBodys');
    expect(tbodys).toHaveLength(1);
  });

  it('testa se ao adicionar um filtro de population igual a 1000 e remover todos os filtros aparece todos os planetas novamente', async () => {
    renderWithContext(<App />);

    await waitFor(() => expect(screen.queryByText('Carregando...')).not.toBeInTheDocument(), { timeout: 6000});
    const columnInput = screen.getByTestId('column-filter');
    const comparisonInput = screen.getByTestId('comparison-filter');
    const valueInput = screen.getByTestId('value-filter');
    userEvent.selectOptions(columnInput, 'population');
    userEvent.selectOptions(comparisonInput, 'igual a');
    userEvent.type(valueInput, '1000');
    const filterBtn = screen.getByTestId('button-filter');
    userEvent.click(filterBtn);
    const tbodys = screen.getAllByTestId('tableBodys');
    expect(tbodys).toHaveLength(1);
    const removeFiltersBtn = screen.getByTestId('button-remove-filters');
    userEvent.click(removeFiltersBtn);
    expect(screen.getAllByTestId('tableBodys')).toHaveLength(10);
  });

  it('testa se ao adicionar dois filtro e remover um deles aparece somente os corretos', async () => {
    renderWithContext(<App />);

    await waitFor(() => expect(screen.queryByText('Carregando...')).not.toBeInTheDocument(), { timeout: 6000});
    const columnInput = screen.getByTestId('column-filter');
    const comparisonInput = screen.getByTestId('comparison-filter');
    const valueInput = screen.getByTestId('value-filter');
    userEvent.selectOptions(columnInput, 'diameter');
    userEvent.selectOptions(comparisonInput, 'maior que');
    userEvent.type(valueInput, '9000');
    const filterBtn = screen.getByTestId('button-filter');
    userEvent.click(filterBtn);
    expect(screen.getAllByTestId('planet-name')).toHaveLength(7)
    userEvent.selectOptions(columnInput, 'population');
    userEvent.selectOptions(comparisonInput, 'menor que');
    userEvent.clear(valueInput);
    userEvent.type(valueInput, '1000000');
    userEvent.click(filterBtn);
    expect(screen.getAllByTestId('planet-name')).toHaveLength(2);
    const filter = screen.getAllByTestId('filter');
    // const removeBtns = screen.getAllByRole('button', { name:"Remove" });
    userEvent.click(filter[1].lastChild);
    expect(screen.getAllByTestId('planet-name')).toHaveLength(7);
  });
})