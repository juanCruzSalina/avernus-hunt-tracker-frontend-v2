import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';

import menuReducer from '../features/sidebar/sidebarSlice'
import modalReducer from '../features/modal/modalSlice'
import accordionInfoReducer from '../features/accordion/accordionInfoSlice'
import headerReducer from '../features/tableHeader/tableHeaderSlice'
import cardsReducer from '../features/homeCards/homeCards';
import userReducer from '../features/user/userSlice';
import appDataReducer from '../features/appData/appData';
import appStructureReducer from '../features/appStructure/appStructure';
import filtersActionsReducer from '../features/filter/filters';

const combinedReducer = combineReducers({
  menu: menuReducer,
  modal: modalReducer,
  accordionInfo: accordionInfoReducer,
  headers: headerReducer,
  cards: cardsReducer,
  user: userReducer,
  appData: appDataReducer,
  appStructure: appStructureReducer,
  filterActions: filtersActionsReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'restart') {
    state = undefined;
  }
  return combinedReducer(state, action);
}

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
