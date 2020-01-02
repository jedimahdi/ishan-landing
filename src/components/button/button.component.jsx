import React from 'react';
import { Link } from 'react-router-dom';

import './button.styles.scss';

const Button = ({ name, url }) => {
  return (
    <Link to={url} className="next-step-action my-btn">
      {name}
    </Link>
  );
};

export default Button;
