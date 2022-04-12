import { UserMeDataType } from './../../types/auth-data';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { AuthStateType } from '../../types/state';

const initialState: AuthStateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userAuthInfo: null,
  userEmail: '',
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
    },
    requireAuthorization(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
    getUserEmail(state, action: PayloadAction<string>) {
      state.userEmail = action.payload;
    },
  },
});

export const { loginUser, logoutUser, requireAuthorization, getUserEmail } =
  authSlice.actions;

export default authSlice.reducer;
