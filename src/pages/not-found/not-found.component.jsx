import React from 'react';

import { toPersianDigits } from '../../shared/util/helpers';

const NotFound = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: '300px',
      marginBottom: '320px',
      marginLeft: '50px',
      marginRight: '50px'
    }}
  >
    <h1 style={{ color: '#fff', fontSize: '76px' }}>
      {toPersianDigits('404')}
    </h1>
    <h2 style={{ color: 'rgb(150, 150, 150)', fontSize: '42px' }}>
      صفحه مورد نظر یافت نشد
    </h2>
  </div>
);

export default NotFound;
