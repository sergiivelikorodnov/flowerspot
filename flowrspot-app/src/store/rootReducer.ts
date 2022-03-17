import {combineReducers} from 'redux';
import postsReducer from './slice/flowersSlice';


export enum StoreNameSpace {
  Posts = 'POSTS',
}

export const rootReducer = combineReducers({
  [StoreNameSpace.Posts]: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;