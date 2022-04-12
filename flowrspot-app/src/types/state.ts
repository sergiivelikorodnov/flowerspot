import { UserMeDataType } from './auth-data';
import { AuthorizationStatus, FetchStatus } from '../const';
import { RootState } from '../store/rootReducer';
import { FavFlowerType, FlowerType } from './flower';

export type FlowersStateType = {
  posts: FlowerType[];
  favPosts: FavFlowerType[];
};
export type FetchStatusType = {
  fetchStatus: FetchStatus;
};

export type CommonStateType = {
  isModalActive: boolean;
  isLoginModalActive: boolean;
  isRegisterModalActive: boolean;
  isProfileModalActive: boolean;
  isRegisterSuccessModalActive: boolean;
  isLoginSuccessModalActive: boolean;
};

export type AuthStateType = {
  authorizationStatus: AuthorizationStatus;
  userAuthInfo: UserMeDataType | null;
  userEmail: string | null;
};

export type State = RootState;
