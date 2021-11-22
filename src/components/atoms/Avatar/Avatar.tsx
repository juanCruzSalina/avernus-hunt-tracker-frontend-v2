import React from 'react'
import styled from 'styled-components';

export interface IAvatar {
  image: string
  size: 'l' | 'm' | 's'
}

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const StyledAvatar = styled.img<Pick<IAvatar, 'size'>>`
  height: ${props => (props.size === 'l')
                        ? props.theme.measures.xl
                        : (props.size === 'm')
                        ? props.theme.measures.l
                        : props.theme.measures.m };
  width: ${props => (props.size === 'l')
                        ? props.theme.measures.xl
                        : (props.size === 'm')
                        ? props.theme.measures.l
                        : props.theme.measures.m };
  border-radius: 50%;
`

const Avatar: React.FC<IAvatar> = (props) => {
  return (
    <Wrapper>
      <StyledAvatar src={props.image} alt={'altAvatar'} size={props.size} />
    </Wrapper>
  )
}

export default Avatar
