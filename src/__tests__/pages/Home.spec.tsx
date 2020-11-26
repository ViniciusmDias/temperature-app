import React from 'react';

import { render } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home component', () => {
  it('should be able to render a button', () => {
    const { getAllByTestId } = render(<Home />);

    expect(getAllByTestId('home-container')).toBeTruthy();
  });
});
