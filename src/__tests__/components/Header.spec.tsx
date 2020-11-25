import React from 'react';

import { render } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header component', () => {
  it('should be able to render the Header component', () => {
    const { getAllByTestId } = render(<Header />);

    expect(getAllByTestId('header-container')).toBeTruthy();
  });
});
