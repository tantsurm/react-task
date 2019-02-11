import * as routes from '../constants/routes';

export default Object.keys(routes).reduce(
  (accumulator, currentKey) => accumulator.concat(routes[currentKey]), [],
);
