import React from 'react';

import { render } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button component', () => {
  it('should be able to render a button', () => {
    const { getAllByTestId } = render(<Button type="submit" />);

    expect(getAllByTestId('button-container')).toBeTruthy();
  });
});
