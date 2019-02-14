import React from 'react';

const UserList = ({
  list,
  perPage,
  getNextPage,
  getPrevPage,
  isLast,
  isFirst,
  isLoading,
  handleClick,
}) => (
  <div className="container-fluid mt-5 mb-3">
    <div className="row text-center">
      {list.map(({ first_name, last_name, id, avatar }) => (
        <div key={id} className={`col-lg-${Math.round(12 / perPage) || 1}`}>
          <img src={avatar} className="bd-placeholder-img rounded-circle" alt="avatar" />
          <h2>{`${first_name} ${last_name}`}</h2>
          <p>{id}</p>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
          <p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleClick(id)}
            >
              View details &raquo;
            </button>
          </p>
        </div>
      ))}
      <div className="container pt-3">
        {list.length && !isFirst ? <button className="btn btn-primary border" type="button" disabled={isLoading} onClick={getPrevPage}>Previous page</button> : null}
        {list.length && !isLast ? <button className="btn btn-primary border" type="button" disabled={isLoading} onClick={getNextPage}>Next page</button> : null}
      </div>
    </div>
  </div>
);

export default UserList;
