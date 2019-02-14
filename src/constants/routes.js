import { lazy } from 'react';

const SignIn = lazy(() => import('../components/public/signIn'));
const UserList = lazy(() => import('../components/private/user-only/UserList'));
const User = lazy(() => import('../components/private/user-only/User'));
const NotFound = lazy(() => import('../components/public/notFound'));

export const LANDING = {
  path: '/',
  routePath: '/',
  access: 'public',
  component: SignIn,
};

export const USER_LIST = {
  path: '/list',
  routePath: '/list/:page?',
  access: 'user-only',
  component: UserList,
};

export const USER = {
  path: '/user',
  routePath: '/user/:id?',
  access: 'user-only',
  component: User,
};

export const NOT_FOUND = {
  access: 'public',
  component: NotFound,
};
