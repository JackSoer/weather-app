import React from 'react';
import './Error.scss';

const Error = ({ errorText }) => {
  return (
    <div className="container">
      <p className="error">{errorText}</p>
    </div>
  );
};

export default Error;
