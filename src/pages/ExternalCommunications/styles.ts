import styled from 'styled-components';
import { lighten, darken } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 60vw;
  margin: 0 auto;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ButtonPagination = styled.button`
  font: 18px 'Barlow';
  font-weight: bold;
  text-decoration: underline;
  border: 0;
  background: transparent;
  padding: 5px 20px;
  transition: background 0.3s;
  height: 45px;
  border-radius: 8px;

  &:hover {
    background: ${darken(0.05, colors.background)};
  }
`;

export const InputContainer = styled.div`
  form {
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    button {
      width: 100px;
      height: 50px;
      border-radius: 8px;
      background: ${colors.primary};
      color: ${colors.background};
      font: 18px 'Barlow';
      font-weight: bold;
      border: 0;
      outline: 0;
      padding: 0 16px;
      transition: background 0.3s;

      &:hover {
        background: ${lighten(0.05, colors.secondary)};
      }
    }
  }
`;

export const DialogLoginContainer = styled.div`
  width: 100vh;
  margin: 0 auto;
  height: 100vh;

  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    margin: 0 auto;
    height: 200px;
    min-width: 50vh;
    max-width: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background: ${colors.background};
    border-radius: 8px;
    border: 1px solid ${colors.gray};


    h2 {
      font: 22px 'Barlow';
    }

    button {
      margin-top: 20px;
      width: 150px;
      height: 45px;
      border-radius: 8px;
      background: ${colors.primary};
      color: ${colors.background};
      font: 18px 'Barlow';
      font-weight: bold;
      border: 0;
      outline: 0;
      padding: 0 16px;
    }
  }
`;
