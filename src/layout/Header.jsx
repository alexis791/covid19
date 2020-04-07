import React from 'react';
import Covid19Logo from '../assets/img/covid19.png';

const Header = () => (
  <header className="Header">
    <div className="Header__Content">
      <img className="Header__logo" alt="Covid19-Logo" src={ Covid19Logo }/>
      <h3 className="Header__title">Estadisticas de COVID19</h3>
    </div>
  </header>
);

export default Header;