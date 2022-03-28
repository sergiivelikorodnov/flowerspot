import { AuthDataRegisterType } from './../types/auth-data';
import { FlowersType } from './../types/flower';
import { APIRoutes } from '../config/apiRoutes';
import { ThunkActionResult } from '../types/action';
import { getPosts } from './flowersSlice/flowersSlice';
import {
  adaptAuthToken,
  adaptPostsBackToFront,
  adaptUserInfo,
  adaptUserRegister,
} from '../services/adapters';
import {
  AuthorizationStatus,
  FetchStatus,
  NotificationMessage,
  toastPosition,
} from '../const';
import { toast } from 'react-toastify';
import { setStatus } from './fetchStatusSlice/fetchStatusSlice';
import { AuthDataType } from '../types/auth-data';
import {
  loginUser as setUserData,
  logoutUser,
  requireAuthorization,
  setAuthKey,
} from './authSlice/authSlice';
import { dropAuthStatus, saveAuthStatus } from '../services/authStatus';
import { dropToken, saveToken } from '../services/token';
import {
  setIsLoginModalActive,
  setIsLoginSuccessModalActive,
  setIsRegisteredSuccessModalActive,
  setIsRegisterModalActive,
} from './commonSlice/commonSlice';

enum HttpCode {
  Unauthorized = 401,
  BadRequest = 400,
}

export const fetchPostsAction =
  (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api
      .get<FlowersType>(APIRoutes.Posts)
      .then(({ data }) => {
        dispatch(getPosts(adaptPostsBackToFront(data)));
        dispatch(setStatus(FetchStatus.Success));
      })
      .catch(() => toast.error(NotificationMessage.Error, toastPosition));
  };

export const fetchRandomPostsAction =
  (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api
      .get<FlowersType>(APIRoutes.Random)
      .then(({ data }) => {
        dispatch(getPosts(adaptPostsBackToFront(data)));
        dispatch(setStatus(FetchStatus.Success));
      })
      .catch(() => toast.error(NotificationMessage.Error, toastPosition));
  };

export const fetchSearchPostsAction =
  (query: string | null): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api
      .get<FlowersType>(APIRoutes.SearchPosts + `${query}`)
      .then(({ data }) => {
        dispatch(getPosts(adaptPostsBackToFront(data)));
        dispatch(setStatus(FetchStatus.Success));
      })
      .catch(() => toast.error(NotificationMessage.Error, toastPosition));
  };

export const loginAction =
  ({ email, password }: AuthDataType): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api
      .post(APIRoutes.Login, { email, password })
      .then((response) => {
        if (response.status === HttpCode.BadRequest) {
          return toast.info(response.data.error, toastPosition);
        }

        const token = adaptAuthToken(response.data);

        saveAuthStatus(AuthorizationStatus.Auth);
        saveToken(token.authToken);
        dispatch(setAuthKey(token));
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(meInfoAction());
        dispatch(setIsLoginSuccessModalActive(true));
        dispatch(setIsLoginModalActive(false));
      })
      .catch(() => toast.error(NotificationMessage.AuthError, toastPosition));
  };

export const registerAction =
  ({
    email,
    password,
    firstName,
    lastName,
    dateOfBirth,
  }: AuthDataRegisterType): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api
      .post(
        APIRoutes.Register,
        adaptUserRegister({ email, password, firstName, lastName, dateOfBirth })
      )
      .then((response) => {
        if (response.status === HttpCode.BadRequest) {
          return toast.info(response.data.error, toastPosition);
        }
        const token = adaptAuthToken(response.data);
        dispatch(setIsRegisteredSuccessModalActive(true));
        dispatch(setIsRegisterModalActive(false));
        dispatch(setAuthKey(token));
      })
      .catch(() => toast.error(NotificationMessage.AuthError, toastPosition));
  };

export const checkAuthAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api
      .get(APIRoutes.Me)
      .then((data) => {
        data.status &&
          data.status !== 401 &&
          dispatch(requireAuthorization(AuthorizationStatus.Auth)) &&
          dispatch(setUserData(adaptUserInfo(data.data.user))) &&
          saveAuthStatus(AuthorizationStatus.Auth);
      })
      .catch(() => {
        toast.error(NotificationMessage.ConnecError, toastPosition);
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
        saveAuthStatus(AuthorizationStatus.NoAuth);
      });
  };

export const logoutAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    dropToken();
    dropAuthStatus();
    dispatch(logoutUser());
  };

export const meInfoAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api
      .get(APIRoutes.Me)
      .then(({ data }) => {
        dispatch(setUserData(adaptUserInfo(data.user)));
      })
      .catch(() => {
        toast.error(NotificationMessage.ConnecError, toastPosition);
      });
  };
