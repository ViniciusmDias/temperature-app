import React from 'react';

import { render } from '@testing-library/react';
import ShowClimate from '../../components/ShowClimate';

describe('ShowClimate component', () => {
  it('should be able to render the ShowClimate component', () => {
    const { getAllByTestId } = render(
      <ShowClimate
        latitude={3213213}
        longitude={3213213}
        city="Florianopolis"
        state="Sc"
      />,
    );

    expect(getAllByTestId('showclimate-container')).toBeTruthy();
  });
});
