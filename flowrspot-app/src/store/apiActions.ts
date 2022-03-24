import { AuthDataRegisterType } from './../types/auth-data';
import { FlowersType } from './../types/flower';
import { APIRoutes } from '../config/apiRoutes';
import { ThunkActionResult } from '../types/action';
import { getPosts } from './flowersSlice/flowersSlice';
import { adaptAuthToken, adaptPostsBackToFront, adaptUserRegister } from '../services/adapters';
import {
  AuthorizationStatus,
  FetchStatus,
  NotificationMessage,
} from '../const';
import { toast } from 'react-toastify';
import { getStatus } from './fetchStatusSlice/fetchStatusSlice';
import { AuthDataType } from '../types/auth-data';
import { loginUser, logoutUser, /* registerUser, */ requireAuthorization, setAuthKey } from './authSlice/authSlice';
import { dropAuthStatus, saveAuthStatus } from '../services/authStatus';
import { dropToken, saveToken } from '../services/token';
import { setIsLoginModalActive, setIsModalActive, setIsRegisterModalActive } from './commonSlice/commonSlice';

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
        dispatch(getStatus(FetchStatus.Success));
        dispatch(getPosts(adaptPostsBackToFront(data)));
      })
      .catch(() => toast.error(NotificationMessage.Error));
  };

export const fetchSearchPostsAction =
  (query: string | null): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api
      .get<FlowersType>(APIRoutes.SearchPosts + `${query}`)
      .then(({ data }) => {
        dispatch(getStatus(FetchStatus.Success));
        dispatch(getPosts(adaptPostsBackToFront(data)));
      })
      .catch(() => toast.error(NotificationMessage.Error));
  };

export const loginAction =
  ({ email, password }: AuthDataType): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api
      .post(APIRoutes.Login, { email, password })
      .then((response) => {
        if (response.status === HttpCode.BadRequest) {
          return toast.info(response.data.error, {
            position: toast.POSITION.TOP_CENTER
          });
        }

        const token = adaptAuthToken(response.data);

        saveAuthStatus(AuthorizationStatus.Auth);
        saveToken(token.authToken);
        dispatch(loginUser(response.data));
        dispatch(setAuthKey(token))
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(setIsModalActive(false));
        dispatch(setIsLoginModalActive(false));

        toast.success(NotificationMessage.AuthLogged, {
          position: toast.POSITION.TOP_CENTER
        });
      })
      .catch(() => toast.error(NotificationMessage.AuthError, {
        position: toast.POSITION.TOP_CENTER
      }));
  };

  export const registerAction =
  ({ email, password, firstName, lastName, dateOfBirth}: AuthDataRegisterType): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api
      .post(APIRoutes.Register, adaptUserRegister({ email, password, firstName, lastName, dateOfBirth }))
      .then((response) => {
        if (response.status === HttpCode.BadRequest) {
          return toast.info(response.data.error);
        }
        const token = adaptAuthToken(response.data);
        dispatch(setIsLoginModalActive(true));
        dispatch(setIsRegisterModalActive(false));
        dispatch(setAuthKey(token))
        toast.success(NotificationMessage.AuthRegistered);
      })
      .catch(() => toast.error(NotificationMessage.AuthError, {
        position: toast.POSITION.TOP_CENTER
      }));
  };


  export const checkAuthAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api
      .get(APIRoutes.Me)
      .then(({status}) => {
        status &&
          status !== 401 &&
          dispatch(requireAuthorization(AuthorizationStatus.Auth)) &&
          saveAuthStatus(AuthorizationStatus.Auth);
      })
      .catch(() => {
        toast.error(NotificationMessage.ConnecError, {
          position: toast.POSITION.TOP_CENTER
        });
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
      .then((res) => {
        console.log(res);
/*
        status &&
          status !== 401 &&
          status !== 404 &&
          dispatch(requireAuthorization(AuthorizationStatus.Auth)) &&
          saveAuthStatus(AuthorizationStatus.Auth); */
      })
      .catch(() => {
        toast.error(NotificationMessage.ConnecError, {
          position: toast.POSITION.TOP_CENTER
        });
       /*  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
        saveAuthStatus(AuthorizationStatus.NoAuth); */
      });
  };
