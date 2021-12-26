import React from 'react';
import { Router } from '@reach/router';
import * as Routes from './Routes';

import Landing from '../pages/Landing';

export default function Navigation() {
  return (
    <Router>
      {/* Pages */}
      <Landing path={Routes.landing} default />
    </Router>
  );
}
