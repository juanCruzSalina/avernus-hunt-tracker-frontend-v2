import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { appStructure } from '../../features/appStructure/appStructure'
import ContentContainer from '../atoms/ContentContainer/ContentContainer'
import GlobalStructure from '../atoms/GlobalStructure/GlobalStructure'
import Sidebar from '../molecules/Sidebar/Sidebar'
import Table, { DonationType } from '../molecules/Tables/Table'
import Filter from '../organisms/Filter/Filter'
import Topbar from '../organisms/Topbar/Topbar'

const DonationsPage: React.FC = () => {
  const { donation } = useAppSelector(appStructure)
  const items: DonationType[] = []

  return (
    <GlobalStructure>
      <Topbar/>
      <Sidebar/>
      <ContentContainer {...donation}>
        <Table type='donation' items={items}  />
        <Filter type='lures&trophies' />
      </ContentContainer>
    </GlobalStructure>
  )
}

export default DonationsPage
