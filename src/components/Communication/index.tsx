import React from 'react';

import {
  Container,
  DateContainer,
  NumberContainer,
  AuthorContainer,
  SubjectContainer,
} from './styles';

export interface Communication {
  date: string;
  ic_number?: number;
  ec_number?: number;
  title: string;
  author: string;
  to?: string;
}

interface CommunicationItemProps {
  communication: Communication;
}

const CommunicationItem: React.FC<CommunicationItemProps> = ({
  communication,
}) => {
  return (
    <Container>
      <div>
        <DateContainer>
          <span>{communication.date}</span>
        </DateContainer>
        <NumberContainer>
          <h3>{communication.ic_number ? communication.ic_number : communication.ec_number}</h3>
        </NumberContainer>
        <AuthorContainer>
          <p>{communication.author}</p>
        </AuthorContainer>
        <SubjectContainer>
          <p>{communication.title}</p>
          {/* <div>
            <span>excluir </span>
            <span>editar</span>
          </div> */}
        </SubjectContainer>
      </div>
    </Container>
  );
};

export default CommunicationItem;
