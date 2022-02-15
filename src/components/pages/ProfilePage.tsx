import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { appStructure } from '../../features/appStructure/appStructure'
import ContentContainer from '../atoms/ContentContainer/ContentContainer'
import GlobalStructure from '../atoms/GlobalStructure/GlobalStructure'
import Sidebar from '../molecules/Sidebar/Sidebar'
import Topbar from '../organisms/Topbar/Topbar'

const ProfilePage: React.FC = () => {
  const {profile} = useAppSelector(appStructure)
  
  return (
    <GlobalStructure>
      <Sidebar />
      <Topbar/>
      <ContentContainer {...profile}>
      </ContentContainer>
    </GlobalStructure>
  )
}

export default ProfilePage
