import React from 'react';
import './index.css';

function createPageControls(totalPages, currentPage, handler) {
  const result = [];

  for (let i = 1; i <= totalPages; i++) {
    result.push(
      // eslint-disable-next-line
      <h4 className="page-controls__control" onClick={() => handler(i)}>
        <span
          className={`badge ${i === currentPage ? 'badge-primary' : 'badge-secondary'}`}
        >
          {i}
        </span>
      </h4>,
    );
  }

  return result;
}

const pageController = ({ totalPages, page, handleClick }) => (
  <div className="container-fluid">
    <div className="page-controls m-auto d-flex justify-content-around">
      {createPageControls(totalPages, page, handleClick)}
    </div>
  </div>
);

export default pageController;
