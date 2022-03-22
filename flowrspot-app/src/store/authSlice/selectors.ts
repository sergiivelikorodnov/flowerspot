import {StoreNameSpace} from '../rootReducer';
import {State} from '../../types/state';

export const getLoginStatus = (state: State) => state[StoreNameSpace.AuthStatus].authorizationStatus;
