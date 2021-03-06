import React from 'react';
import { Switch } from 'react-router';

import routerConfig from './configs/routerConfig';
import ProtectedRoute from './components/common/protectedRoute';

const router = () => (
  <Switch>
    {
      routerConfig.map(({ routePath, access, component }) => (
        <ProtectedRoute
          key={routePath || null}
          path={routePath}
          access={access}
          component={component}
          exact
        />
      ))
    }
  </Switch>
);

export default router;
