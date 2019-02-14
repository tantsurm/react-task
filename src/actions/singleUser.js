import axios from 'axios';

import {
  GET_SIGLE_USER,
  GET_SIGLE_USER_SUCCESS,
  GET_SIGLE_USER_FAILURE,
  GET_SIGLE_USER_URL,
} from '../constants';

import createConfig from '../configs/axiosConfig';

// action creators

const getSingleUser = () => ({
  type: GET_SIGLE_USER,
});

const getSingleUserSuccess = payload => ({
  type: GET_SIGLE_USER_SUCCESS,
  payload,
});

const getSingleUserFailure = ({ message: error }) => ({
  type: GET_SIGLE_USER_FAILURE,
  error,
});

// thunk

export default (userId, token) => async (dispatch) => {
  try {
    dispatch(getSingleUser());


    const response = await axios(createConfig({
      route: GET_SIGLE_USER_URL + userId,
      token,
    }));
    const { data: { data } } = await response;

    dispatch(getSingleUserSuccess(data));
  }
  catch ({ message }) {
    dispatch(getSingleUserFailure(message));
  }
};
