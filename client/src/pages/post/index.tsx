import React from 'react';
import styled from 'styled-components';

import { Content, ContentNavigation, PostCategory, Comment } from './component';

const Container = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start'
});

const ContentContainer = styled.div({
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '24px',
  marginRight: '24px'
});

export default function Post() {
  return (
    <Container>
      <PostCategory />
      <ContentContainer>
        <Content />
        <Comment />
      </ContentContainer>
      <ContentNavigation />
    </Container>
  );
}
