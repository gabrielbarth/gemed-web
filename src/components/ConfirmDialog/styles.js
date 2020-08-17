import styled from 'styled-components';

import colors from '~/styles/colors';

export const DialogContainer = styled.div`
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

      > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

    h2 {
      font: 22px 'Barlow';
    }

    h1 {
      margin: 10px 0;
      font: 44px 'Barlow';
      color: ${colors.secondary};
    }

    button {
      margin-top: 20px;
      width: 110px;
      height: 45px;
      border-radius: 8px;
      background: ${colors.primary};
      color: ${colors.background};
      font: 16px 'Barlow';
      font-weight: bold;
      border: 0;
      outline: 0;
      padding: 0 16px;

    }
  }
`;
