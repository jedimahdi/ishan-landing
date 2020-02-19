import React from 'react'

import './Select.css'

const Select = props => {
  return (
    <div
      className={`form-input select-input-control ${props.large &&
        'select-large'}`}
    >
      {!props.no_label && <label htmlFor={props.id}>{props.label}</label>}
      <select id={props.id} className="select-input form-control ">
        {props.children}
      </select>
    </div>
  )
}

export default Select
