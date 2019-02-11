import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from '../../constants';
import initialState from '../initialState';

function authReducer(state = initialState.auth, { type, payload, error }) {
  switch (type) {
    case SIGN_IN: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        payload,
      };
    }
    case SIGN_IN_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
