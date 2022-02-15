import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { appStructure } from '../../features/appStructure/appStructure'
import ContentContainer from '../atoms/ContentContainer/ContentContainer'
import GlobalStructure from '../atoms/GlobalStructure/GlobalStructure'
import Sidebar from '../molecules/Sidebar/Sidebar'
import Table, { WishlistType } from '../molecules/Tables/Table'
import Filter from '../organisms/Filter/Filter'
import Topbar from '../organisms/Topbar/Topbar'


const WishlistPage: React.FC = () => {
  const {wishlist} = useAppSelector(appStructure)
  const items: WishlistType[] = []

  return (
    <GlobalStructure>
      <Sidebar/>
      <Topbar/>
      <ContentContainer {...wishlist}>
        <Table type='wishlist' items={items}  />
        <Filter type='gear'/>
      </ContentContainer>
    </GlobalStructure>
  )
}

export default WishlistPage
