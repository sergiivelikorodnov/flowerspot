import { RootState } from '../store/rootReducer';
import { FlowerType } from './flower';

export type FlowersState = {
  posts: FlowerType[],
}

export type State = RootState;
