import React from "react";
import {screen, waitFor } from "@testing-library/react";
import App from "../App";
import renderWithContext from "../helpers/renderWithContext";
import userEvent from "@testing-library/user-event";

describe('Testa a ordenação', () => {
  it('Ao selecionar população e ascendente aparece a ordem certa', async () => {
    renderWithContext(<App />);

    await waitFor(() => expect(screen.queryByText('Carregando...')).not.toBeInTheDocument(), { timeout: 6000});
    const ascInput = screen.getByTestId('column-sort-input-asc');
    userEvent.click(ascInput);
    const sortBtn = screen.getByTestId('column-sort-button');
    userEvent.click(sortBtn);
    const names = screen.getAllByTestId('planet-name');
    expect(names[0]).toHaveTextContent('Yavin IV');
    expect(names[9]).toHaveTextContent('Dagobah');
    expect(names[7]).toHaveTextContent('Coruscant');
  });
  it('Ao selecionar diameter e descendente aparece a ordem certa', async () => {
    renderWithContext(<App />);

    await waitFor(() => expect(screen.queryByText('Carregando...')).not.toBeInTheDocument(), { timeout: 6000});
    const columnInput = screen.getByTestId('column-sort');
    userEvent.selectOptions(columnInput, 'diameter');
    const descInput = screen.getByTestId('column-sort-input-desc');
    userEvent.click(descInput);
    const sortBtn = screen.getByTestId('column-sort-button');
    userEvent.click(sortBtn);
    const names = screen.getAllByTestId('planet-name');
    expect(names[0]).toHaveTextContent('Bespin');
    expect(names[9]).toHaveTextContent('Endor');
    expect(names[7]).toHaveTextContent('Dagobah');
  });
})