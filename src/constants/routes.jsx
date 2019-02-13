import { lazy } from 'react';

const SignIn = lazy(() => import('../components/public/signIn'));
const UserList = lazy(() => import('../components/private/user-only/UserList'));

export const LANDING = {
  path: '/',
  access: 'public',
  component: SignIn,
};

export const USER_LIST = {
  path: '/list/:page?',
  access: 'user-only',
  component: UserList,
};

export const NOT_FOUND = {
  access: 'public',
  component: null,
};
