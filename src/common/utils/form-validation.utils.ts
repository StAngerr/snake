import { formValidation } from '../constants/validation.constants';

export interface ValidationObject {
  valid: boolean;
  errorMsg?: string;
}

const emailValidationPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const phonePattern = /^[0-9 | \-]+$/g;

const validField = { valid: true };

export const validateEmail = (value: string): ValidationObject => {
  if (!value) {
    return {
      valid: false,
      errorMsg: formValidation.emailRequired,
    };
  } else if (!emailValidationPattern.test(value)) {
    return getInvalidObj(formValidation.invalidEmail);
  }
  return validField;
};

export const validatePassword = (value: string): ValidationObject => {
  if (!value) {
    return getInvalidObj(formValidation.passwordRequired);
  }
  return validField;
};

export const validatePhone = (value: string): ValidationObject => {
  if (!phonePattern) {
    return getInvalidObj(formValidation.invalidPhone);
  }
  return validField;
};

const getInvalidObj = (msg: string) => {
  return {
    valid: false,
    errorMsg: msg,
  };
};
