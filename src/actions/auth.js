import axios from 'axios';

import {
  SIGN_IN_URL,
  SIGN_IN, SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  NULIFY_AUTH_STATE,
} from '../constants';

import createConfig from '../configs/axiosConfig';
import storageKey from '../constants/storageKey';

// action creators

const signIn = () => ({
  type: SIGN_IN,
});

const signInSuccess = payload => ({
  type: SIGN_IN_SUCCESS,
  payload,
});

const signInFailure = ({ message: error }) => ({
  type: SIGN_IN_FAILURE,
  error,
});

export const nulifyAuthState = () => ({
  type: NULIFY_AUTH_STATE,
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

    localStorage.setItem(storageKey, JSON.stringify(data));
    dispatch(signInSuccess(data));
  }
  catch ({ message }) {
    dispatch(signInFailure(message));
  }
};
