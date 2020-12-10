import styled from 'styled-components';
import Link from 'next/link';

import { BorderBox } from 'src/components';

const Title = styled.div({
  width: '100%',
  fontSize: '1.4rem',
  fontWeight: 'bold',
  margin: '25px 0 0'
});

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '.9rem 0',
  justifyContent: 'center',
  alignItems: 'center',
  '& > div:nth-child(1)': {
    margin: '0 0 .8rem !important'
  }
});

const Content = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '950px',
  padding: '1rem',
  height: '10rem'
});

const PreviewImage = styled.img({
  width: '300px',
  height: '8rem',
  objectFit: 'cover'
});

const PreviewTextWrapper = styled.div({
  padding: '0 1rem',
  width: 'calc(650px - 2rem)',
  display: 'flex',
  height: '8rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

const PreviewTitle = styled.div({
  height: '2rem',
  width: '100%',
  fontSize: '1.4rem',
  fontWeight: 'bold',
  textAlign: 'left',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical'
});

const PreviewContent = styled.div({
  width: '100%',
  height: '5rem',
  fontSize: '1.1rem',
  margin: '.5rem 0 0',
  wordBreak: 'keep-all',
  textAlign: 'left',
  padding: '.5rem 0 0',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical'
});

interface Props {}

export default function ContentCategory() {
  return (
    <div style={{ width: '100%' }}>
      <Title>Content Category</Title>
      <Container>
        <Link href='/post' passHref>
          <a>
            <BorderBox styles={{ margin: '.8rem 0' }}>
              <Content>
                <PreviewImage src='/images/FakeProfile.png' alt='preview image' />
                <PreviewTextWrapper>
                  <PreviewTitle>Hello!</PreviewTitle>
                  <PreviewContent>PreviewContent</PreviewContent>
                </PreviewTextWrapper>
              </Content>
            </BorderBox>
          </a>
        </Link>
        <Link href='/post'>
          <a>
            <BorderBox styles={{ margin: '.8rem 0' }}>
              <Content>
                <PreviewImage src='/images/FakeProfile.png' alt='preview image' />
                <PreviewTextWrapper>
                  <PreviewTitle>Very long long long long long long long long longlonglonglonglonglonglonglonglong</PreviewTitle>
                  <PreviewContent>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </PreviewContent>
                </PreviewTextWrapper>
              </Content>
            </BorderBox>
          </a>
        </Link>
        <Link href='/post'>
          <a>
            <BorderBox styles={{ margin: '.8rem 0' }}>
              <Content>
                <PreviewImage src='/images/FakeProfile.png' alt='preview image' />
                <PreviewTextWrapper>
                  <PreviewTitle>Very long long long long long long long long longlonglonglonglonglonglonglonglong</PreviewTitle>
                  <PreviewContent>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </PreviewContent>
                </PreviewTextWrapper>
              </Content>
            </BorderBox>
          </a>
        </Link>
        <Link href='/post'>
          <a>
            <BorderBox styles={{ margin: '.8rem 0' }}>
              <Content>
                <PreviewImage src='/images/FakeProfile.png' alt='preview image' />
                <PreviewTextWrapper>
                  <PreviewTitle>Very long long long long long long long long longlonglonglonglonglonglonglonglong</PreviewTitle>
                  <PreviewContent>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </PreviewContent>
                </PreviewTextWrapper>
              </Content>
            </BorderBox>
          </a>
        </Link>
      </Container>
    </div>
  );
}