import React from 'react';

import { Container } from './styles';

const Loading: React.FC = () => (
  <Container className="ellipsis" data-testid="loading-container">
    <div />
    <div />
    <div />
    <div />
  </Container>
);
export default Loading;
