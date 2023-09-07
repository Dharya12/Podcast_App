import { configureStore } from '@reduxjs/toolkit';
import podcastReducer from '../slice/Slice';

export const store = configureStore({
  reducer: {
    Podcast: podcastReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch