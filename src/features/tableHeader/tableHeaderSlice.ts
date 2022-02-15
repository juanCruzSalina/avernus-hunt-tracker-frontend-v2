import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';

interface IHeaderData {
  awarded: string[],
  donation: string[],
  wishlist: string[],
}

const initialState: IHeaderData = {
  donation: ['Date', 'Tier', 'Lure/Trophy', 'Item' , 'Amount', 'Donator/s'],
  awarded: ['Date', 'Tier', 'Item', 'Main?', 'Name'],
  wishlist: ['Date', 'Tier', 'Item', 'Main?', 'Donated?', 'Name']
}

export const headerSlice = createSlice({
  name: 'headers',
  initialState,
  reducers: {}
})

export const headerOptions = (state: RootState) => state.headers

export default headerSlice.reducer;