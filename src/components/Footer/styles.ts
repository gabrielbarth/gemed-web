import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.footer`
   font: 18px 'Barlow';
   color: ${colors.dark};
   text-align: center;
   position: fixed;
   width: 50%;
   bottom: 20px;

  span {
    color: red;
  }

  a {
    color: ${colors.dark};
    text-decoration: none;
  }

`;