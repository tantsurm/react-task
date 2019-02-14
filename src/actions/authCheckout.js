import {
  AUTH_CHECKOUT_SUCCESS,
  AUTH_CHECKOUT_FAILURE,
} from '../constants';

// action creators

export const confirmAuth = () => ({
  type: AUTH_CHECKOUT_SUCCESS,
});

export const denyAuth = () => ({
  type: AUTH_CHECKOUT_FAILURE,
});
