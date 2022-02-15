import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';

interface IFilterActions {
  dataType: string,
  entry: string
}

interface IFilterState {
  type: string[],
  lures: string[],
  items: string[],
  trophies: string[],
  tier: string[],
}

const initialState: IFilterState ={
  type: [],
  lures: [],
  items: [],
  trophies: [],
  tier: [],
}

export const filterActionsSlice = createSlice({
  name: 'filterActions',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<IFilterActions>) => {
      state[action.payload.dataType].push(action.payload.entry)
    },
    removeFilter: (state, action: PayloadAction<IFilterActions>) => {
      state[action.payload.dataType] = state[action.payload.dataType].filter(item => item !== action.payload.entry)
    },
  }
})

export const { addFilter, removeFilter } = filterActionsSlice.actions;

export const filterActions = (state: RootState) => state.filterActions;

export default filterActionsSlice.reducer;