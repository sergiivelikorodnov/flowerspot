export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const API_BASE_URL = 'https://flowrspot-api.herokuapp.com/api/v1/';
export const REQUEST_TIMEOUT = 5000;


export enum NotificationMessage {
  Error = 'Sorry. Something went wrong',
  AuthError = 'Something went wrong. Check your email and password',
  CheckAuth = 'Login to see more functinality',
  ConnecError = 'Check your connection please',
  AuthRegistered = 'Congratulations! You have successfully signed up for FlowrSpot!',
  AuthLogged = 'You have successfully logged'
}

export enum FetchStatus {
  InProgress = 'IN_PROGRESS',
  Success = 'SUCCESS'
}

