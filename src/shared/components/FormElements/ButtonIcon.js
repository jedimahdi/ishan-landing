import React from 'react';

import Button from './Button';
import './ButtonIcon.css';

const ButtonIcon = props => {
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
