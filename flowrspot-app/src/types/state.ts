import { UserMeDataType } from './auth-data';
import { AuthorizationStatus, FetchStatus } from '../const';
import { RootState } from '../store/rootReducer';
import { FlowerType } from './flower';

export type FlowersStateType = {
  posts: FlowerType[],
}
export type FetchStatusType = {
  fetchStatus: FetchStatus;
};

export type CommonStateType = {
  isModalActive: boolean,
  isLoginModalActive: boolean,
  isRegisterModalActive: boolean,
  isProfileModalActive: boolean,
  isRegisterSuccessModalActive: boolean,
  isLoginSuccessModalActive: boolean,
};

export type AuthStateType = {
    authorizationStatus: AuthorizationStatus;
    userAuthInfo: UserMeDataType | null;
};

export type State = RootState;
