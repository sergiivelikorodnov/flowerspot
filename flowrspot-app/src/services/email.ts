const AUTH_TOKEN_EMAIL = 'flowr-spot-email';

export type Email = string;

export const getEmail = (): Email => {
  const email = localStorage.getItem(AUTH_TOKEN_EMAIL);
  return email || '';
};

export const saveEmail = (email: Email): void => {
  localStorage.setItem(AUTH_TOKEN_EMAIL, email);
};

export const dropEmail = (): void => {
  localStorage.removeItem(AUTH_TOKEN_EMAIL);
};
