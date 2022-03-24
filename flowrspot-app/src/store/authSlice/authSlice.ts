import { AuthTokenType, UserMeDataType } from './../../types/auth-data';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
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
    loginUser(state, action: PayloadAction<UserMeDataType>) {
      state.userAuthInfo = action.payload;
    },
    logoutUser(state) {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.userAuthInfo = null;
      state.authCode = null;
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
