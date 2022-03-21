import {combineReducers} from 'redux';
import postsReducer from './flowersSlice/flowersSlice';
import fetchStatusReducer from './fetchStatusSlice/fetchStatusSlice'
import commonReducer from './commonSlice/commonSlice'

export enum StoreNameSpace {
  Posts = 'POSTS',
  FetchStatus = 'FETCH_STATUS',
  ModalStatus = 'MODAL_STATUS',
}

export const rootReducer = combineReducers({
  [StoreNameSpace.Posts]: postsReducer,
  [StoreNameSpace.FetchStatus]: fetchStatusReducer,
  [StoreNameSpace.ModalStatus]: commonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
