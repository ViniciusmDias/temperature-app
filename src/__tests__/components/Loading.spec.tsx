import React from 'react';

import { render } from '@testing-library/react';
import Loading from '../../components/Loading';

describe('Loading component', () => {
  it('should be able to render a Loading', () => {
    const { getAllByTestId } = render(<Loading />);

    expect(getAllByTestId('loading-container')).toBeTruthy();
  });
});
