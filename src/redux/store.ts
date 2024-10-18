// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducer/cartReducer';

export const server = import.meta.env.VITE_SERVER;
export const store = configureStore({
  reducer: {
    [cartReducer.name]: cartReducer.reducer,
   
  },

});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
