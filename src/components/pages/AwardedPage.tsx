import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { appStructure } from '../../features/appStructure/appStructure'
import ContentContainer from '../atoms/ContentContainer/ContentContainer'
import GlobalStructure from '../atoms/GlobalStructure/GlobalStructure'
import Sidebar from '../molecules/Sidebar/Sidebar'
import Table, { AwardedType } from '../molecules/Tables/Table'
import Filter from '../organisms/Filter/Filter'
import Topbar from '../organisms/Topbar/Topbar'

const AwardedPage: React.FC = () => {
  const { awarded } = useAppSelector(appStructure)
  const items: AwardedType[] =[]

  return (
    <GlobalStructure>
      <Topbar />
      <Sidebar />
      <ContentContainer {...awarded}>
        <Table type='awarded' items={items}  />
        <Filter type='gear' />
      </ContentContainer>
    </GlobalStructure>
  )
}

export default AwardedPage
