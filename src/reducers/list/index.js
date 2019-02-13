import { GET_USER_LIST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE } from '../../constants';
import initialState from '../initialState';

function homeReducer(state = initialState.list, {
  type,
  payload,
  error,
}) {
  switch (type) {
    case GET_USER_LIST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_USER_LIST_SUCCESS: {
      const {
        data,
        page,
        total_pages,
      } = payload;

      return {
        ...state,
        userList: data,
        pagination: {
          page,
          total_pages,
        },
        isLoading: false,
      };
    }
    case GET_USER_LIST_FAILURE: {
      return {
        ...state,
        error,
      };
    }
    default: {
      return state;
    }
  }
}

export default homeReducer;
