import React from 'react'

const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const Statistic = (props) => {
  const { status, quantity, title, percent } = props

  return (<div className={status}>
    <p className="Statistic--quantity">{ isNaN(quantity) ? 0 : formatNumber(quantity)}</p>
    <p className="Statistic--title">{title}</p>
    <p className="Statistic--percentage">{ isNaN(percent) ? 0 : percent.toFixed(1) + '%'}</p>
  </div>)
}


export default Statistic
