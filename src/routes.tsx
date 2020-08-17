import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import InternalCommunications from '~/pages/InternalCommunications';
import ExternalCommunications from '~/pages/ExternalCommunications';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
      <Route
        path="/internal-communications"
        component={InternalCommunications}
      />
      <Route
        path="/external-communications"
        component={ExternalCommunications}
      />
    </BrowserRouter>
  );
};

export default Routes;
