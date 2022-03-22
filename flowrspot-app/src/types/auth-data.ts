export type AuthDataType = {
  email: string,
  password: string,
};

export type AuthDataErrorType = {
  auth_token: boolean,
  error: string,
};

export type AuthDataRegisterType = {
  email: string,
  password: string,
  firstName?: string,
  ['first_name']?: string,
  lastName?: string,
  ['last_name']?: string,
  dateOfBirth?: string
  ['date_of_birth']?: string,
}

export type AuthTokenType = {
  authToken: string,
  ['auth_token']?: string,
}
