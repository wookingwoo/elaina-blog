import { useState } from 'react';
import styled from 'styled-components';

import { RoundImage } from 'src/components';
import { theme } from 'src/resources';

const Container = styled.aside({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '10px',
  minHeight: 'calc(90vh - 40px)',
  alignSelf: 'stretch'
});

const Name = styled.span({
  display: 'block',
  fontSize: '1.4rem',
  fontWeight: 'bold',
  width: '100%',
  margin: '15px 0',
  wordBreak: 'keep-all'
});

const ListWrapper = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start'
});

const Description = styled.li({
  width: '100%',
  fontSize: '1.1rem',
  wordBreak: 'keep-all',
  margin: '10px 0'
});

const ButtonContainer = styled.div({
  width: '100%',
  marginTop: '.5rem',
  display: 'flex'
});

const EditButton = styled.div({
  width: '100%',
  padding: '.5rem',
  borderRadius: '12px',
  border: '1px solid #ddd',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  userSelect: 'none'
});

const SaveButton = styled.div({
  width: '60%',
  marginRight: '5%',
  padding: '.5rem',
  borderRadius: '12px',
  border: '1px solid #ddd',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  userSelect: 'none'
});

const CancelButton = styled.div({
  width: '35%',
  padding: '.5rem',
  borderRadius: '12px',
  border: '1px solid #ddd',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  userSelect: 'none'
});

const Input = styled.input({
  width: '100%',
  fontSize: '1.1rem',
  margin: '10px 0'
});

interface Props {}

export default function Profile(props: Props) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <Container>
      <RoundImage
        src={'/images/FakeProfile.png'}
        styles={{ borderRadius: '50%', border: `4px solid ${theme.light.blogName}`, width: '280px', height: '280px' }}
      />
      <Name>Elaina</Name>
      <ListWrapper>
        <Description>Hello My name is Elaina~~~~~~~</Description>
        <Description>
          <i className='fas fa-link'></i>&nbsp;
          <a href='/' target='_blank' rel='noopener noreferer nofollow'>
            Link
          </a>
        </Description>
        <Description>
          <i className='far fa-building'></i>&nbsp;
          <span>Company</span>
        </Description>
        <Description>
          <i className='fas fa-map-marker-alt'></i>&nbsp;
          <span>Location</span>
        </Description>
        <Description>
          <i className='far fa-envelope'></i>&nbsp;
          <a href='mailto:'>Email</a>
        </Description>
      </ListWrapper>
      <ButtonContainer>
        {isEditMode ? (
          <>
            <SaveButton onClick={() => setIsEditMode(false)}>Save</SaveButton>
            <CancelButton onClick={() => setIsEditMode(false)}>Cancel</CancelButton>
          </>
        ) : (
          <EditButton onClick={() => setIsEditMode(true)}>Edit Profile</EditButton>
        )}
      </ButtonContainer>
    </Container>
  );
}
