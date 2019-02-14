import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/jquery/dist/jquery.slim';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import store from './store';

import ErrorBoundary from './components/common/ErrorBoundary';
import Spinner from './components/common/spinner';
import Router from './router';
import Header from './components/public/Header';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Suspense fallback={<Spinner />}>
          <Router />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('root'),
);

serviceWorker.unregister();
