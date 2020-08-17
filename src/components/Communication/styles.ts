import styled from 'styled-components';
import { lighten } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  background: ${lighten(0.6, colors.primary)};
  border: 1px solid ${lighten(0.4, colors.primary)};
  height: 50px;
  align-items: center;
  line-height: 18px;
  border-radius: 8px;
  margin: 15px 0;
  padding: 0 20px;

  > div {
    /* @media (min-width: 1100px) { */
    max-width: 1100px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* } */
  }

  span {
    color: ${colors.dark};
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    font-weight: bold;
  }

  h3 {
    color: red;
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    color: ${colors.dark};
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
  }
`;

export const DateContainer = styled.div`
  width: 15%;
  text-align: left;
`;

export const NumberContainer = styled.div`
  width: 8%;
  text-align: left;
`;

export const AuthorContainer = styled.div`
  width: 30%;
  text-align: left;
`;

export const SubjectContainer = styled.div`
  width: 45%;
  text-align: left;
`;
