import { FetchStatus } from '../const';
import { RootState } from '../store/rootReducer';
import { FlowerType } from './flower';

export type FlowersState = {
  posts: FlowerType[],
}
export type FetchStatusType = {
  fetchStatus: FetchStatus;
};

export type State = RootState;
