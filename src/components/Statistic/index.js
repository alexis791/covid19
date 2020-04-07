import React from 'react'

const Statistic = (props) => (
  <div className={props.status}>
    <p className="Statistic--quantity">{props.quantity}</p>
    <p className="Statistic--title">{props.title}</p>
    <p className="Statistic--percentage">{props.percent + '%'}</p>
  </div>
)

export default Statistic
