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
import { loginUser, /* registerUser, */ requireAuthorization, setAuthKey } from './authSlice/authSlice';

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
          return toast.info(response.data.error);
        }

        /* saveAuthStatus(AuthorizationStatus.Auth);
            saveToken(data.token);
            saveEmail(data.email); */
        dispatch(loginUser(response.data));
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        toast.success(NotificationMessage.AuthLogged);
      })
      .catch(() => toast.error(NotificationMessage.AuthError));
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

        // dispatch(registerUser(response.data));
        dispatch(setAuthKey(token))
        toast.success(NotificationMessage.AuthRegistered);
      })
      .catch(() => toast.error(NotificationMessage.AuthError));
  };


