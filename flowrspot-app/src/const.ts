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
