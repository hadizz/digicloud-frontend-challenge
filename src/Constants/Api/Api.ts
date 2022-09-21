// this should handle with .nev file for develop and production usages
const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_BASE_URL
    : process.env.REACT_APP_DEV_BASE_URL;

export const RANDOM_USER_BASE_URL = 'https://randomuser.me/api/';

export default BASE_URL;
