import { FetchStatus } from '../const';
import { RootState } from '../store/rootReducer';
import { FlowerType } from './flower';

export type FlowersState = {
  posts: FlowerType[],
}
export type FetchStatusType = {
  fetchStatus: FetchStatus;
};

export type CommonState = {
  isModalActive: boolean,
  isLoginModalActive: boolean,
  isRegisterModalActive: boolean,
  isProfileModalActive: boolean,
};

export type State = RootState;
