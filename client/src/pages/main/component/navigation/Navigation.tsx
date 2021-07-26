import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote, faBook, faUser } from '@fortawesome/free-solid-svg-icons';

import { Lang, trans } from 'src/resources/languages';

import { NavigationButton } from './NavigationButton';

const Container = styled.nav((props) => ({
  position: 'sticky',
  top: '4rem',
  display: 'flex',
  width: '100%',
  backgroundColor: props.theme.mainBackground,
  borderBottom: `1px solid ${props.theme.borderColor}`,
  alignItems: 'center',
  zIndex: 2
}));

const NavName = styled.span({
  fontSize: '1.1rem',
  fontWeight: 'bold'
});

export function Navigation() {
  return (
    <Container>
      <NavigationButton href='/'>
        <>
          <FontAwesomeIcon icon={faStickyNote} style={{ marginRight: '.5rem' }} />
          <NavName>{trans(Lang.LatestPost)}</NavName>
        </>
      </NavigationButton>
      <NavigationButton query='category'>
        <>
          <FontAwesomeIcon icon={faBook} style={{ marginRight: '.5rem' }} />
          <NavName>{trans(Lang.Category)}</NavName>
        </>
      </NavigationButton>
      <NavigationButton query='about'>
        <>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '.5rem' }} />
          <NavName>{trans(Lang.About)}</NavName>
        </>
      </NavigationButton>
    </Container>
  );
}
