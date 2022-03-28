import { adaptPostsBackToFront, adaptUserInfo } from './../services/adapters';
import { AuthorizationStatus, FetchStatus } from '../const';
import { UserMeDataType } from '../types/auth-data';
import { FlowerType } from '../types/flower';
import { fakeAllPostsFlowers } from './mock-posts';
import { FAKE_USER_DATA} from './mock-user';

export type fakeState = {
  AUTH: {
    authorizationStatus: AuthorizationStatus;
    userAuthInfo: UserMeDataType | null;
  };
  POSTS: {
    posts: FlowerType[];
  };
  MODAL_STATUS: {
    isModalActive: boolean,
    isLoginModalActive: boolean,
    isRegisterModalActive: boolean,
    isProfileModalActive: boolean,
    isRegisterSuccessModalActive: boolean,
    isLoginSuccessModalActive: boolean,
  };
  FETCH_STATUS: {
    fetchStatus: FetchStatus;
  };
};

const fakeFrontPosts = adaptPostsBackToFront(fakeAllPostsFlowers)
const userFrontend = adaptUserInfo(FAKE_USER_DATA)

export const fakeStateNoAuth: fakeState = {
  AUTH: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userAuthInfo: null,
  },
  POSTS: {
    posts: fakeFrontPosts.flowers,
  },
  MODAL_STATUS: {
    isModalActive: false,
    isLoginModalActive: false,
    isRegisterModalActive: false,
    isProfileModalActive: false,
    isRegisterSuccessModalActive: false,
    isLoginSuccessModalActive: false,
  },
  FETCH_STATUS: {
    fetchStatus: FetchStatus.Success,
  },
};

export const fakeStateAuth: fakeState = {
  AUTH: {
    authorizationStatus: AuthorizationStatus.Auth,
    userAuthInfo: userFrontend,
  },
  POSTS: {
    posts: fakeFrontPosts.flowers,
  },
  FETCH_STATUS: {
    fetchStatus: FetchStatus.Success,
  },
  MODAL_STATUS: {
    isModalActive: false,
    isLoginModalActive: false,
    isRegisterModalActive: false,
    isProfileModalActive: false,
    isRegisterSuccessModalActive: false,
    isLoginSuccessModalActive: false,
  },
};

