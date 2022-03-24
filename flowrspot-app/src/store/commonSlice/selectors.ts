import {StoreNameSpace} from '../rootReducer';
import {State} from '../../types/state';

export const getModalStatus = (state: State) => state[StoreNameSpace.ModalStatus].isModalActive;
export const getLoginModalStatus = (state: State) => state[StoreNameSpace.ModalStatus].isLoginModalActive;
export const getRegisterModalStatus = (state: State) => state[StoreNameSpace.ModalStatus].isRegisterModalActive;
export const getProfileModalStatus = (state: State) => state[StoreNameSpace.ModalStatus].isProfileModalActive;
export const getRegisterSuccessModalStatus = (state: State) => state[StoreNameSpace.ModalStatus].isRegisterSuccessModalActive;
export const getLoginSuccessModalStatus = (state: State) => state[StoreNameSpace.ModalStatus].isLoginSuccessModalActive;
