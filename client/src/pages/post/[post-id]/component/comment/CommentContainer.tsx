import React from 'react';
import styled from 'styled-components';

import { BorderBox, InputBox } from 'src/components';
import Comment from './Comment';
import CommentEditor from './CommentEditor';
import { ThemeMode } from 'src/redux/common/type';

const Container = styled.section({
  display: 'flex',
  width: '100%',
  marginTop: '20px',
  padding: '.5rem 1.5rem',
  flexDirection: 'column',
  jusitfyContent: 'flex-start',
  alignItems: 'center',
  minHeight: '20rem',
  '@media screen and (max-width: 767px)': {
    padding: '.5rem'
  }
});

const Title = styled.span({
  display: 'block',
  width: '100%',
  fontSize: '1.4rem',
  fontWeight: 'bold'
});

const Counter = styled.div({
  width: '100%',
  fontSize: '1.15rem',
  fontWeight: 'bold'
});

interface Props {
  theme: ThemeMode;
  url: string | string[];
}

export default function CommentContainer(props: Props) {
  return (
    <Container>
      <Title>Comments</Title>
      <CommentEditor theme={props.theme} />
      <div style={{ width: '100%' }}>
        <Counter>덧글 수: 3개</Counter>
        {/* db에서 comments 꺼내서 각각 <Comment /> 나열, 임시로 3개만 둬봄 */}
        <Comment theme={props.theme} />
        <Comment theme={props.theme} />
        <Comment theme={props.theme} />
      </div>
    </Container>
  );
}