import React from 'react';

import { render } from '@testing-library/react';
import SearchLocation from '../../components/SearchLocation';

describe('SearchLocation component', () => {
  it('should be able to render the SearchLocation component', () => {
    const { getAllByTestId } = render(<SearchLocation />);

    expect(getAllByTestId('search-container')).toBeTruthy();
  });
});
