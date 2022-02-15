import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';

interface IStructureObject {
  gridStructure: string,
  columnMeasures: string
}

interface IStructure {
  home: IStructureObject,
  donation: IStructureObject,
  awarded: IStructureObject,
  wishlist: IStructureObject,
  profile: IStructureObject
}

const initialState: IStructure = {
  home: {
    gridStructure: 'cards',
    columnMeasures: '100%'
  },
  donation: {
    gridStructure: 'table filter',
    columnMeasures: '80% auto'
  },
  awarded: {
    gridStructure: 'table filter',
    columnMeasures: '80% auto'
  },
  wishlist: {
    gridStructure: 'table filter',
    columnMeasures: '80% auto'
  },
  profile: {
    gridStructure: 'profileCard data',
    columnMeasures: '20% auto'
  }
}

export const appStructureSlice = createSlice({
  name: 'appStructure',
  initialState,
  reducers: {}
})

export const appStructure = (state: RootState) => state.appStructure;

export default appStructureSlice.reducer