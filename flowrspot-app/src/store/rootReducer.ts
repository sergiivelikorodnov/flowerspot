import {combineReducers} from 'redux';
import postsReducer from './flowersSlice/flowersSlice';
import fetchStatusReducer from './fetchStatusSlice/fetchStatusSlice'

export enum StoreNameSpace {
  Posts = 'POSTS',
  FetchStatus = 'FETCH_STATUS'
}

export const rootReducer = combineReducers({
  [StoreNameSpace.Posts]: postsReducer,
  [StoreNameSpace.FetchStatus]: fetchStatusReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
