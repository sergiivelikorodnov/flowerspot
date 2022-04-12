import { StoreNameSpace } from '../rootReducer';
import { State } from '../../types/state';
import { FavFlowerType, FlowerType } from '../../types/flower';

export const getAllPosts = (state: State): FlowerType[] =>
  state[StoreNameSpace.Posts].posts;
export const getAllFavPosts = (state: State): FavFlowerType[] =>
  state[StoreNameSpace.Posts].favPosts;
