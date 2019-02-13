import React, { Fragment } from 'react';

const UserList = ({
  list,
  getNextPage,
  getPrevPage,
  isLast,
  isFirst,
}) => (
  <div>
    {list.map(({ name, id }) => (
      <Fragment key={id}>
        <h2>{name}</h2>
        <p>{id}</p>
      </Fragment>
    ))}
    {list.length && !isFirst ? <button type="button" onClick={getPrevPage}>Previous page</button> : null}
    {list.length && !isLast ? <button type="button" onClick={getNextPage}>Next page</button> : null}
  </div>
);

export default UserList;
