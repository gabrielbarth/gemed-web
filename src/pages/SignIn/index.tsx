import React, { useState, FormEvent, useContext} from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '~/context/Auth';

import { Container } from './styles';

function SignIn() {
  const history = useHistory();

  const { handleLogin } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  async function onLogin(e: FormEvent) {
    e.preventDefault();
    try {
      await handleLogin(name, password);
      history.push('./internal-communications');
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Container>
      <div>
        <form onSubmit={onLogin}>
          <h1>GEMED</h1>
          <input
            type="text"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <button type="submit"> ENTRAR </button>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
