import { AUTH_CHECKOUT_FAILURE, AUTH_CHECKOUT_SUCCESS } from '../../constants';

const initialState = {
  isAuthorized: null,
};

function authReducer(state = initialState, { type }) {
  switch (type) {
    case AUTH_CHECKOUT_SUCCESS: {
      return {
        ...state,
        isAuthorized: true,
      };
    }
    case AUTH_CHECKOUT_FAILURE: {
      return {
        ...state,
        isAuthorized: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
