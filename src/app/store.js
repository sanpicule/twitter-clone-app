import { configureStore} from '@reduxjs/toolkit';
import userReducer from '../feature/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const dispatch = store.dispatch;
export const getState = store.getState;
