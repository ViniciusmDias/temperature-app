import React from 'react';

import { HeaderMenu } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderMenu>
      <a href="/">Weather Forecast</a>
      <div>
        <a className="active" href="/">
          Forecast
        </a>
        <a href="https://viniciusdias.works/">About</a>
      </div>
    </HeaderMenu>
  );
};

export default Header;
