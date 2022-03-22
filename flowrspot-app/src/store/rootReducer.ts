import {combineReducers} from 'redux';
import postsReducer from './flowersSlice/flowersSlice';
import fetchStatusReducer from './fetchStatusSlice/fetchStatusSlice';
import commonReducer from './commonSlice/commonSlice';
import authReducer from './authSlice/authSlice'

export enum StoreNameSpace {
  Posts = 'POSTS',
  FetchStatus = 'FETCH_STATUS',
  ModalStatus = 'MODAL_STATUS',
  AuthStatus = 'AUTH'
}

export const rootReducer = combineReducers({
  [StoreNameSpace.Posts]: postsReducer,
  [StoreNameSpace.FetchStatus]: fetchStatusReducer,
  [StoreNameSpace.ModalStatus]: commonReducer,
  [StoreNameSpace.AuthStatus]: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
