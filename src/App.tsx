import React from 'react';
import Routes from './routes';

import { AuthProvider } from '~/context/Auth';

import GlobalStyle from '~/styles/global';

const App: React.FC = () =>{
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
