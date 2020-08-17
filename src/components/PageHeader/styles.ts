import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.header`
  background: ${colors.primary};
  height: 15vh;
  display: flex;
  font-family: 'Barlow', sans-serif;
  border-radius: 0 0 8px 8px;
  

  > div {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PageTitleContainer = styled.div`
  justify-content: center;
  width: 80%;
  color: ${colors.background};

  strong {
    font-size: 36px;
  }
`;

export const LinkContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  > div {
    /* height: 36px; */
    padding: 14px;
    border-radius: 8px;
    background: ${colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: ${colors.background};
  }
`;
