import React from 'react'
import styled from 'styled-components';
import '../../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useAppSelector } from '../../../app/hooks'
import { cardsData } from '../../../features/homeCards/homeCards'
import HomeCards from '../HomeCards/HomeCards'

const Wrapper = styled.div`
  grid-area: cards;
  width: 100%;
  height: 100%;
`;

const HomeSlider: React.FC = () => {
  const cards = useAppSelector(cardsData)
  return (
    <Wrapper>
      <Carousel autoPlay infiniteLoop dynamicHeight>
        {cards.map((card,idx) => <HomeCards key={idx} {...card}/>)}
      </Carousel>
    </Wrapper>
  )
}

export default HomeSlider