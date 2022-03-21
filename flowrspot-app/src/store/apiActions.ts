import { FlowersType } from './../types/flower';
import { APIRoute } from '../config/apiRoutes';
import { ThunkActionResult } from '../types/action';
import { getPosts } from './flowersSlice/flowersSlice';
import { adaptPostsBackToFront } from '../services/adapters';
import { FetchStatus, NotificationMessage } from '../const';
import { toast } from 'react-toastify';
import { getStatus } from './fetchStatusSlice/fetchStatusSlice';

export const fetchPostsAction = (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      await api
        .get<FlowersType>(APIRoute.Posts)
        .then(({ data }) => {
          dispatch(getStatus(FetchStatus.Success));
          dispatch(getPosts(adaptPostsBackToFront(data)));
        })
        .catch(() => toast.error(NotificationMessage.Error));
    };

export const fetchSearchPostsAction = (query:string | null): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      await api
        .get<FlowersType>(APIRoute.SearchPosts+`${query}`)
        .then(({ data }) => {
          dispatch(getStatus(FetchStatus.Success));
          dispatch(getPosts(adaptPostsBackToFront(data)));
        })
        .catch(() => toast.error(NotificationMessage.Error));
    };
