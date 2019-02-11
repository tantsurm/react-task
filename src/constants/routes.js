import React, { lazy } from 'react';

const SignIn = lazy(() => import('../components/public/signIn'));

export const LANDING = {
  path: '/',
  access: 'public',
  component: SignIn,
};

export const HOME = {
  path: '/home',
  access: 'user-only',
  component: () => <h1>Wats up homie ? Looks like u've entered the user-only component... U are one of us!</h1>,
};

export const NOT_FOUND = {
  access: 'public',
  component: null,
};
