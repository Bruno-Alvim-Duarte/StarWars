import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import renderWithContext from "../helpers/renderWithContext";

describe('Testa a rendereização da table', () => {
  it('deveria ser renderizado corretamente as informações no thead', async () => {
    jest.spyOn(global, 'fetch');
    renderWithContext(<App />);

    await waitFor(() => expect(screen.queryByText('Carregando...')).not.toBeInTheDocument(), { timeout: 3000})
    expect(fetch).toHaveBeenCalledWith('https://swapi.dev/api/planets');
    const thead = screen.getAllByTestId('tableHeaders');
    expect(thead).toHaveLength(13)
  })
})