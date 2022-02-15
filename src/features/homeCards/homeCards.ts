import { createSlice } from "@reduxjs/toolkit";
import { faClipboard, faHandHolding, faListAlt } from "@fortawesome/free-solid-svg-icons";

import { RootState } from '../../app/store';
import { IHomeCard } from "../../components/organisms/HomeCards/HomeCards";



const initialState: IHomeCard[] = [
  {
    title: 'Hunt Spreadsheet',
    desc: 'Keep track of lures/trophies donations for your alliance',
    buttonTo:'/donation',
    image: 'https://allgamersin.com/wp-content/uploads/2020/09/Neverwinter_Avernus_2.jpg',
    icon: faClipboard
  },
  {
    title: 'Wishlist',
    desc: 'Useful for to register those member who helped and wanted a specific píece of gear',
    buttonTo:'/awarded',
    image: 'https://i.imgur.com/MtAoYoF.png',
    icon: faListAlt
  },
  {
    title: 'Awarded Gear',
    desc: 'Records of those who recived a piece of gear during an alliance hunt run',
    buttonTo:'/wishlist',
    image: 'https://i.imgur.com/5HXnzTK.png',
    icon: faHandHolding
  },
]

export const cardsSlice = createSlice({
  name:'homeCards',
  initialState,
  reducers:{}
})

export const cardsData = (state: RootState) => state.cards;

export default cardsSlice.reducer