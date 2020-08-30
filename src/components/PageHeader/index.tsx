import React from 'react';
import { Link } from 'react-router-dom';

import { Container, PageTitleContainer, LinkContainer } from './styles';

interface PageHeaderProps {
  title: string;
  description?: string;
  navigateTo: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, navigateTo = '/' }) => {
  return (
    <Container>
      <PageTitleContainer>
        <h1>{title}</h1>
        <p>{description}</p>
      </PageTitleContainer>
      <LinkContainer>
        <div>
          <Link to={navigateTo}>
            Ir para {navigateTo === '/internal-communications' ? "CI's": 'Ofícios'}
          </Link>
        </div>
      </LinkContainer>
    </Container>
  );
};

export default PageHeader;
