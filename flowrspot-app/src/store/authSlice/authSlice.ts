import { AuthTokenType } from './../../types/auth-data';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { AuthDataType } from '../../types/auth-data';
import { AuthStateType } from '../../types/state';

const initialState: AuthStateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userAuthInfo: null,
  authCode: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<AuthDataType>) {
      state.userAuthInfo = action.payload;
    },
    logoutUser(state) {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    },
    requireAuthorization(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
    setAuthKey(state, action: PayloadAction<AuthTokenType>) {
      state.authCode = action.payload;
    },
  },
});

export const {
  loginUser,
  logoutUser,
  requireAuthorization,
  setAuthKey
} = authSlice.actions;

export default authSlice.reducer;
