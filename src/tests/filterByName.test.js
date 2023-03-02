import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import renderWithContext from "../helpers/renderWithContext";
import userEvent from "@testing-library/user-event";

describe('Testa o filtro por nome', () => {
  it('testa se ao adicionar o nome Yavin IV so aparece 1', async () => {
    renderWithContext(<App />);

    await waitFor(() => expect(screen.queryByText('Carregando...')).not.toBeInTheDocument(), { timeout: 6000});
    const nameInput = screen.getByTestId('name-filter');
    userEvent.type(nameInput, 'Yavin IV');
    expect(screen.getAllByTestId('planet-name')).toHaveLength(1);
    expect(screen.getByTestId('planet-name')).toHaveTextContent('Yavin IV');
  });
  it('testa se ao adicionar o palavra a so aparece 7', async () => {
    renderWithContext(<App />);

    await waitFor(() => expect(screen.queryByText('Carregando...')).not.toBeInTheDocument(), { timeout: 6000});
    const nameInput = screen.getByTestId('name-filter');
    userEvent.type(nameInput, 'a');
    expect(screen.getAllByTestId('planet-name')).toHaveLength(7);
  });
})
