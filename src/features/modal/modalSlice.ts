import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';

export interface IModalState {
  showModal: boolean
}

const initialState: IModalState = {
  showModal: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers:{
    toggleModal: (state) => {
      state.showModal = !state.showModal
    }
  }
})

export const {toggleModal} = modalSlice.actions;

export const modalToggle = (state: RootState) => state.modal;

export default modalSlice.reducer