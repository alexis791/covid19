import React from 'react'
import formatNumber from '../../assets/js/formatNumber'

const Flag = ({direction, population, area}) => (
  <div>
    <img className="Flag" alt="flag" src={direction}/>
    <p>Poblaci&oacute;n: <b>{formatNumber(population)}</b></p>
    <p>Territorio: <b>{formatNumber(area)} Km<sup>2</sup></b></p>
  </div>
)

export default Flag
