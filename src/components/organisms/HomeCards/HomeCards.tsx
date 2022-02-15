import React from 'react';
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import { useNavigate } from 'react-router-dom';
import Image from '../../atoms/Image/Image';
import { rgba } from 'polished';
import Heading from '../../atoms/Heading/Heading';

export interface IHomeCard{
  title: string,
  desc: string,
  buttonTo: string,
  image: string,
  icon: IconDefinition
}

const Wrapper = styled.div<Pick<IHomeCard, 'image'>>`
  width: 100%;
  height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardContent = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: ${props => rgba(props.theme.colors['grey-500'], .7)} ;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const CardText = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.secondary};
`;

const HomeCards: React.FC<IHomeCard> = (props) => {

  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate(props.buttonTo)
  }

  return (
    <Wrapper {...props} >
      <Image url={props.image} />
      <CardContent>
        <CardText>
          <Heading size='l'>{props.title}</Heading>
          <StyledIcon size='5x' icon={props.icon as IconDefinition}/>
          <Text size='l' >{props.desc}</Text>
        </CardText>
        <Button onClick={handleRedirect} isPrimary >See more...</Button>
      </CardContent>
    </Wrapper>
  );
};

export default HomeCards;
