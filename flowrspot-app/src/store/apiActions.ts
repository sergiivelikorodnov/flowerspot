import { FlowersType } from './../types/flower';
import { APIRoute } from '../config/apiRoutes';
import { ThunkActionResult } from '../types/action';
import { getPosts } from './flowersSlice/flowersSlice';
import { adaptPostsBackToFront } from '../services/adapters';
import { NotificationMessage } from '../const';
import { toast } from 'react-toastify';

export const fetchPostsAction = (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      await api
        .get<FlowersType>(APIRoute.Posts)
        .then(({ data }) => {
          dispatch(getPosts(adaptPostsBackToFront(data)));
        })
        .catch(() => toast.error(NotificationMessage.Error));
    };
