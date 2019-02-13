const apiUrl = 'https://reqres.in/api';

export default ({
  route,
  data,
  method,
  token,
}) => {
  console.log('CONFIG', apiUrl + route);
  if (!method && !data) {
    return {
      url: apiUrl + route,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token || '',
      },
    };
  }
  if (method && data) {
    return {
      url: apiUrl + route,
      method,
      data,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token || '',
      },
    };
  }

  throw new Error('Invalid arguments passed!');
};
