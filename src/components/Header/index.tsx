import React from 'react';

import { HeaderMenu } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderMenu data-testid="header-container">
      <a href="/" title="Go to Home">
        Temperature App
      </a>
      <div>
        <a className="active" href="/" title="Go to Home">
          Forecast
        </a>
        <a href="https://viniciusdias.works/" title="Go to Vinicius Dias page">
          About
        </a>
      </div>
    </HeaderMenu>
  );
};

export default Header;
