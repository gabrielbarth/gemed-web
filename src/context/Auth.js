import React, { createContext, useState, useContext, useEffect } from 'react';

import api from '~/services/api';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('@gemed/token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuth(true);
    }

    setLoading(false);
  }, [])



  async function handleLogin(name, password) {

    try {
      const { data: { token }} = await api.post('users/auth', {
        name,
        password
      });

      localStorage.setItem('@gemed/token', JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuth(true);

    } catch (error) {
      console.log('Login Error: ', error);
    }
  }

  //not useful yet..
  function handleLogout() {
    setAuth(false);
    localStorage.removeItem('@gemed/token');
    api.defaults.headers.Authorization = undefined;
    // history.push('/');
  }

  if (loading) {
    return <h1>Carregando...</h1>
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        handleLogin,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };

// export function useAuth() {
//   const context = useContext(AuthContext);

//   const { auth } = context;
//   return { auth, setAuth };
// }