import React from 'react';

import './Backdrop.css';

const Backdrop = (props) => {
  if (props.show)
    return <div className='backdrop' onClick={props.toggleShow}></div>;

  return null;
};

export default Backdrop;
