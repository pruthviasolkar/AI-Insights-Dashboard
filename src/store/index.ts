import { configureStore } from '@reduxjs/toolkit';
import aiDataReducer from './slices/aiDataSlice';

const store = configureStore({
  reducer: {
    aiData: aiDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
