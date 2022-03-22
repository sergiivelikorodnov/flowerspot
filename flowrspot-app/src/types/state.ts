import { AuthDataType, /* AuthDataRegisterType, */ AuthTokenType } from './auth-data';
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
};

export type AuthStateType = {
    authorizationStatus: AuthorizationStatus;
    userAuthInfo: AuthDataType | null;
    //userRegisterInfo: AuthDataRegisterType | null;
    authCode: AuthTokenType | null;
};

export type State = RootState;
