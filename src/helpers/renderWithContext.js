import { render } from '@testing-library/react';
// import MyContext from '../Context/MyContext';
import Provider from '../Context/MyProvider';

const renderWithContext = (component) => render(
  <Provider>
    {component}
  </Provider>,
);

export default renderWithContext;
