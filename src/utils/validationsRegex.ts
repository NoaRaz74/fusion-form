export const EMAIL_VALIDATION_REGEX: RegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const SERVER_ADDRESS_VALIDATION_REGEX: RegExp =
  /[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/;
export const PATH_VALIDATION_REGEX: RegExp = /^[A-Za-z/]+$/;
export const PORT_VALIDATION_REGEX: RegExp =
  /(1\d{4}|[1-9]\d{0,4}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])/;
