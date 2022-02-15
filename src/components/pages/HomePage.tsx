import React from 'react'

import { useAppSelector } from '../../app/hooks'
import { appStructure } from '../../features/appStructure/appStructure';

import ContentContainer from '../atoms/ContentContainer/ContentContainer';
import GlobalStructure from '../atoms/GlobalStructure/GlobalStructure'
import Sidebar from '../molecules/Sidebar/Sidebar'
import HomeSlider from '../organisms/HomeSlider/HomeSlider';
import Topbar from '../organisms/Topbar/Topbar'

const HomePage: React.FC = () => {
  const { home } = useAppSelector(appStructure)

  return (
    <GlobalStructure>
      <Topbar />
      <Sidebar />
      <ContentContainer {...home}>
        <HomeSlider />
      </ContentContainer>
    </GlobalStructure>
  )
}

export default HomePage
