import { GET_USER_LIST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE } from '../../constants';

const initialState = {
  userList: [],
  pagination: { page: null, total_pages: null },
  isLoading: false,
  error: null,
};

function homeReducer(state = initialState, {
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
        per_page,
        total_pages,
      } = payload;

      return {
        ...state,
        userList: data,
        pagination: {
          page,
          total_pages,
          per_page,
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
