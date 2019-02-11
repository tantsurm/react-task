import React from 'react';
import { Switch } from 'react-router';

import routerConfig from './configs/routerConfig';
import ProtectedRoute from './components/common/protectedRoute';

const router = () => (
  <Switch>
    {
      routerConfig.map(({ path, access, component }) => (
        <ProtectedRoute
          key={path || null}
          path={path}
          access={access}
          component={component}
          exact
        />
      ))
    }
  </Switch>
);

export default router;
