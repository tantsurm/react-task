import { GET_SIGLE_USER, GET_SIGLE_USER_SUCCESS, GET_SIGLE_USER_FAILURE } from '../../constants';

const initialState = {
  isFetching: false,
  payload: null,
  error: null,
};

function userReducer(state = initialState, { type, payload, error }) {
  switch (type) {
    case GET_SIGLE_USER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case GET_SIGLE_USER_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        payload,
      };
    }
    case GET_SIGLE_USER_FAILURE: {
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

export default userReducer;
