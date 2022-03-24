import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { CommonStateType } from '../../types/state';

const initialState: CommonStateType = {
  isModalActive: false,
  isLoginModalActive: false,
  isRegisterModalActive: false,
  isProfileModalActive: false,
  isRegisterSuccessModalActive: false,
  isLoginSuccessModalActive: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsModalActive(state, action: PayloadAction<boolean>) {
      state.isModalActive = action.payload;
    },
    setIsLoginModalActive(state, action: PayloadAction<boolean>) {
      state.isLoginModalActive = action.payload;
    },
    setIsRegisterModalActive(state, action: PayloadAction<boolean>) {
      state.isRegisterModalActive = action.payload;
    },
    setIsProfileModalActive(state, action: PayloadAction<boolean>) {
      state.isProfileModalActive = action.payload;
    },
    setIsRegisteredSuccessModalActive(state, action: PayloadAction<boolean>) {
      state.isRegisterSuccessModalActive = action.payload;
    },
    setIsLoginSuccessModalActive(state, action: PayloadAction<boolean>) {
      state.isLoginSuccessModalActive = action.payload;
    },
  },
});

export const {
  setIsLoginModalActive,
  setIsRegisterModalActive,
  setIsModalActive,
  setIsProfileModalActive,
  setIsRegisteredSuccessModalActive,
  setIsLoginSuccessModalActive
} = commonSlice.actions;

export default commonSlice.reducer;
