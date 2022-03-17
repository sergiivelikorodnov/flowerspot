import {StoreNameSpace} from '../rootReducer';
import {State} from '../../types/state';
import { FlowerType } from '../../types/flower';

export const getAllPosts = (state: State): FlowerType[] => state[StoreNameSpace.Posts].posts;
