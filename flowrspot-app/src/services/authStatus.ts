const AUTH_STATUS_KEY = 'flowr-spot-status';

export type AuthStatus = string;

export const saveAuthStatus = (authStatus: AuthStatus): void => {
  localStorage.setItem(AUTH_STATUS_KEY, authStatus);
};

export const dropAuthStatus = (): void => {
  localStorage.removeItem(AUTH_STATUS_KEY);
};
