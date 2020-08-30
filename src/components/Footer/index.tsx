import React from 'react';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
       <p>Feito com <span>❤</span> por {' '}
        <a
          href="https://gabrielbarth.com/en/"
          target="_blank"
        >
          Gabriel.
        </a>
      </p>
    </Container>
  );
};

export default Footer;
