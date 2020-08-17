import styled from 'styled-components';
import { lighten } from 'polished';

import colors from '~/styles/colors';

export const InputContainer = styled.div`
  width: 100%;
  position: relative;

  label {
    font: 16px 'Barlow';
  }

  input {
    width: 95%;
    height: 50px;
    margin-top: 8px;
    border-radius: 8px;
    background: ${lighten(0.6, colors.gray)};
    border: 1px solid ${lighten(0.4, colors.gray)};
    outline: 0;
    padding: 0 16px;
    font: 18px 'Barlow';
  }
`;
