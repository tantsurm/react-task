import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  NULIFY_AUTH_STATE,
} from '../../constants';

const initialState = {
  isFetching: false,
  payload: null,
  error: null,
};

function authReducer(state = initialState, { type, payload, error }) {
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
    case NULIFY_AUTH_STATE: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
