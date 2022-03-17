import { FlowersType } from './../types/flower';
import { APIRoute } from '../config/apiRoutes';
import { ThunkActionResult } from '../types/action';
import { getPosts } from './flowersSlice/flowersSlice';
import { toast } from 'react-toastify';
import { NotificationMessage } from '../const';

export const fetchPostsAction = (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      await api
        .get<FlowersType>(APIRoute.Posts)
        .then(({ data }) => {
          dispatch(getPosts(data));
        })
        .catch(() => toast.error(NotificationMessage.Error));
    };
