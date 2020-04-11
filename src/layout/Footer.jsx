import React from 'react'
import logo from '../assets/img/logo.png'

const Footer = () => (
  <footer className="Footer">
    <div className="Footer__Content">
      <p>Creado por <b><a href="https://www.linkedin.com/in/delgadoalexis/" >Alexis Delgado</a></b></p>
      <a href="https://alexis791.github.io/"><img alt="logo" className="logo" src={logo} /></a>
    </div>
  </footer>
)

export default Footer