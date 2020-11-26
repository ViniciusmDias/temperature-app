/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  ...rest
}) => (
  <Container type={type} {...rest} data-testid="button-container">
    {children}
  </Container>
);
export default Button;
