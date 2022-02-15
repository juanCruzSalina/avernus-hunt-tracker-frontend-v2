import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';
import { ILink } from "../../components/atoms/StyledLink/StyledLink";
import theme from "../../theme/theme";

const initialState: ILink[] = [
  {
    color: theme.colors.black,
    text: 'Profile',
    path: '/profile'
  },
]

export const accordionInfoSlice = createSlice({
  name:'accordionInfo',
  initialState,
  reducers: {
  }
})

export const accordionOptions = (state: RootState) => state.accordionInfo;

export default accordionInfoSlice.reducer