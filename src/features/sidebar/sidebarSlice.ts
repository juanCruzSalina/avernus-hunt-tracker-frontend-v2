import { faBookOpen, faHome, faListAlt, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';
import { ILink } from "../../components/atoms/StyledLink/StyledLink";
import theme from "../../theme/theme";

const initialState: ILink[] = [
  {
    icon: faHome,
    color: theme.colors.white,
    hoverColor: theme.colors["grey-600"],
    text: 'Home',
    linkTo: '/home'
  },
  {
    icon: faListAlt,
    color: theme.colors.white,
    hoverColor: theme.colors["grey-600"],
    text: 'Spreadsheet',
    linkTo: '/spreadsheet'
  },
  {
    icon: faReceipt,
    color: theme.colors.white,
    hoverColor: theme.colors["grey-600"],
    text: 'Awarded',
    linkTo: '/awarded'
  },
  {
    icon: faBookOpen,
    color: theme.colors.white,
    hoverColor: theme.colors["grey-600"],
    text: 'Wishlist',
    linkTo: '/wishlist'
  }
]

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
});

export const selectMenu = (state: RootState) => state.menu;

export default menuSlice.reducer;