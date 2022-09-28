export const allowedAlphanumericAndSpecialChar = /^[À-ÿ A-Za-z0-9-_'&\\/|]*$/;

export const disAllowedSpecialChar = /[~!@#$%^&*()_+}{":?><\/*-]/;

export const allowedAlphanumeric = /^[a-zA-Z0-9 ]*$/;

export const allowedPostiveNumbersAnddecimal =
  /^[+]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/;

export const allowedPostiveIntegerNumbers = /^[1-9]\d*$/;

export const validWebsite =
  /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const allowNumbersOnly = /^[0-9]*$/;

export const emailValid =
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.(?:[a-zA-Z0-9-]+)*$/;

export const validPhone = /^\(\d{3}\)\d{3}-\d{4}$/;
