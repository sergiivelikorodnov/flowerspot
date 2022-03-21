import {StoreNameSpace} from '../rootReducer';
import {State} from '../../types/state';

export const getFetchStatus = (state: State) => state[StoreNameSpace.FetchStatus].fetchStatus;
