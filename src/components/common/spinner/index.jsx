import React from 'react';
import './index.css';

const spinner = ({ centered = true, light = false }) => (
  <div className="d-flex justify-content-center" id={centered ? 'spinner--centered' : 'spinner--default'}>
    <div className={`spinner-border ${light ? 'text-primary' : 'text-dark'}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default spinner;
