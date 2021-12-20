import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';

interface ISelectorData {
  type?: string,
  tier?: number,
  gear?: string,
  lure?: string,
  trophy?: string,
}

const initialState: ISelectorData = {
  type: '',
  tier: 0,
  gear: '',
  lure: '',
  trophy: '',
}



export const accordionSlice = createSlice({
  name: 'selectorData',
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string> ) => {
      const data = JSON.parse(action.payload)
      console.log(data)
      // state.type = action.payload;
    },
    setTier: (state, action: PayloadAction<1 | 2 | 3>) => {
      state.tier = action.payload
    }
  }
})

export const { setType, setTier } =accordionSlice.actions

export const accordionSelections = (state: RootState) => state.accordion

export default accordionSlice.reducer