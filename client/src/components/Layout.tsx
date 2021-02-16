import styled from 'styled-components';

import { Header, Footer } from 'src/components';
import { GlobalStyles } from 'src/styles';

import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { ThemeMode } from 'src/redux/common/type';
import { mockUpData } from 'src/resources';
import { AppCommonProps } from 'src/pages/_app';

const Container = styled.div({
  display: 'flex',
  maxWidth: '1300px',
  margin: '5rem auto 0',
  padding: '20px 0 0',
  minHeight: 'calc(100vh - 5rem)',
  position: 'relative',
  '@media screen and (max-width: 1380px)': {
    width: '100%',
    padding: '20px 10px 0'
  }
});

interface Props extends AppCommonProps {
  children: JSX.Element | JSX.Element[];
}

export default function Layout(props: Props) {
  const theme: ThemeMode = useSelector<RootState, any>((state) => state.common.theme);

  return (
    <>
      <GlobalStyles themeMode={theme} />
      <div>
        <Header name={mockUpData.blogName} isLogin={props.app.isLogin} />
        <Container>{props.children}</Container>
        <Footer />
      </div>
    </>
  );
}
