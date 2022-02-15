import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';

interface IUser {
  nickname: string
  picture: string
  email: string
}

const initialState: IUser = {
  nickname: '',
  picture: '',
  email: ''
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<any> ) => {
      const {nickname, picture, email} = action.payload
      Object.assign(state, {nickname, picture, email})
    }
  }
})

export const { getUser } = userSlice.actions;

export const userData = (state: RootState) => state.user;

export default userSlice.reducer;

