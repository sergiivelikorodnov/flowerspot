import { ThunkAction } from 'redux-thunk';
import { State } from './state';
import { AxiosInstance } from 'axios';
import { Action } from 'redux';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
