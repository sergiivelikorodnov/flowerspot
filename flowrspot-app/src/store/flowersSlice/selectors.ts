import {StoreNameSpace} from '../rootReducer';
import {State} from '../../types/state';
import { FlowersType } from '../../types/flower';

export const getAllPosts = (state: State): FlowersType => state[StoreNameSpace.Posts].posts;
