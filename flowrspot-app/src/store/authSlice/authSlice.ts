import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { AuthData } from '../../types/auth-data';
import { AuthStateType } from '../../types/state';

const initialState: AuthStateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userAuthInfo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<AuthData>) {
      state.userAuthInfo = action.payload;
    },
    logoutUser(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    },
  },
});

export const {
  loginUser,
  logoutUser,
} = authSlice.actions;

export default authSlice.reducer;
