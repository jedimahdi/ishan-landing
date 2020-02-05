import React from 'react';

import Button from './Button';
import './ButtonIcon.css';

const ButtonIcon = props => {
  if (props.to) {
    return (
      <div className="button-icon">
        <Button to={props.to} danger onClick={props.onClick}>
          <i className="fa fa-angle-left"></i>
          <span>{props.children}</span>
        </Button>
      </div>
    );
  }
  return (
    <div className="button-icon">
      <Button danger onClick={props.onClick}>
        <i className="fa fa-angle-left"></i>
        <span>{props.children}</span>
      </Button>
    </div>
  );
};

export default ButtonIcon;
