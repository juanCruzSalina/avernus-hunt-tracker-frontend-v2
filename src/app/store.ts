import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import menuReducer from '../features/sidebar/sidebarSlice'
import modalReducer from '../features/modal/modalSlice'
import accordionReducer from '../features/accordion/accordionSlice'
import accordionInfoReducer from '../features/accordion/accordionInfoSlice'

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    modal: modalReducer,
    accordion: accordionReducer,
    accordionInfo: accordionInfoReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
