export enum AppRoute {
  Root = '/',
  Login = '/login',
  CardId = '/card/:id',
  Favorites = '/favorites',
  CardList = '/cards',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const API_BASE_URL = 'https://flowrspot-api.herokuapp.com/api/v1/flowers';
