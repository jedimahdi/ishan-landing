import React from 'react';

import './sidebar.styles.scss';

const Sidebar = ({ children, title }) => {
  return (
    <div className="col-md-2 offset-md-1 sidebar">
      <h4>{title}</h4>
      <ul>{children}</ul>
    </div>
  );
};

export default Sidebar;
