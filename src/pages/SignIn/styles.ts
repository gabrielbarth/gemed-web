import styled from 'styled-components';
import { lighten } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #ece9e6, #ffffff);
  color: ${colors.secondary};

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
      border-radius: 4px;
      justify-content: center;
      align-items: center;
      padding: 40px;
      background: ${lighten(0.5, colors.primary)};
      display: flex;
      flex-direction: column;

      h1 {
        margin-bottom: 10px;
      }
    }

    input {
      border: 0.5px solid ${colors.secondary};
      border-radius: 4px;
      margin: 10px 0;
      width: 250px;
      height: 42px;
      font-size: 20px;
      padding: 10px;
    }

    button {
      border-radius: 4px;
      width: 250px;
      height: 42px;
      border: 0;
      background: ${colors.primary};
      color: #fff;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;
