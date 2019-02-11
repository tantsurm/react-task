import axios from 'axios';

import {
  SIGN_IN_URL,
  SIGN_IN, SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
} from '../constants';

import createConfig from '../configs/axiosConfig';
import storageKey from '../constants/storageKey';

// action creators

export const signIn = () => ({
  type: SIGN_IN,
});

export const signInSuccess = payload => ({
  type: SIGN_IN_SUCCESS,
  payload,
});

export const signInFailure = ({ message: error }) => ({
  type: SIGN_IN_FAILURE,
  error,
});

// thunk

export default (email, password) => async (dispatch) => {
  try {
    dispatch(signIn());

    const response = await axios(createConfig({
      route: SIGN_IN_URL,
      method: 'POST',
      data: {
        email,
        password,
      },
    }));
    const { data } = await response;

    dispatch(signInSuccess(data));
    localStorage.setItem(storageKey, JSON.stringify(data));
  }
  catch ({ message }) {
    dispatch(signInFailure(message));
  }
};
