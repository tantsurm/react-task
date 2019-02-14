import axios from 'axios';

import {
  GET_USER_LIST_URL,
  GET_USER_LIST,
  GET_USER_LIST_FAILURE,
  GET_USER_LIST_SUCCESS,
} from '../constants';

import createConfig from '../configs/axiosConfig';

// action creators

const getUserList = () => ({
  type: GET_USER_LIST,
});

const getUserListSuccess = payload => ({
  type: GET_USER_LIST_SUCCESS,
  payload,
});

const getUserListFailure = ({ message: error }) => ({
  type: GET_USER_LIST_FAILURE,
  error,
});

// thunk

export default (nextPageNumber, token) => async (dispatch) => {
  try {
    dispatch(getUserList());

    const response = await axios(createConfig({
      route: GET_USER_LIST_URL + nextPageNumber,
      token,
    }));
    const { data } = await response;

    dispatch(getUserListSuccess(data));
  }
  catch ({ message }) {
    dispatch(getUserListFailure(message));
  }
};
