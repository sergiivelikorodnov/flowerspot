import { RootState } from '../store/rootReducer';
import { FlowersType } from './flower';

export type FlowersState = {
  posts: FlowersType,
}

export type State = RootState;
