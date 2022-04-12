import { StoreNameSpace } from '../rootReducer';
import { State } from '../../types/state';

export const getLoginStatus = (state: State) =>
  state[StoreNameSpace.AuthStatus].authorizationStatus;
export const getUserData = (state: State) =>
  state[StoreNameSpace.AuthStatus].userAuthInfo;
export const getUserEmail = (state: State) =>
  state[StoreNameSpace.AuthStatus].userEmail;
