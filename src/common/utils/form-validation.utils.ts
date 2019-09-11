import {formValidation} from '../constants/validation.constants';

export interface ValidationObject {
    valid: boolean;
    errorMsg?: string;
}

const emailValidationPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validateEmail = (value: string): ValidationObject => {
    if (!value) {
        return {
            valid: false,
            errorMsg: formValidation.emailRequired,
        };
    } else if (!emailValidationPattern.test(value)) {
        return {
            valid: false,
            errorMsg: formValidation.invalidEmail,
        };
    }
    return { valid: true };
};

export const validatePassword = (value: string): ValidationObject => {
    if (!value) {
        return {
            valid: false,
            errorMsg: formValidation.passwordRequired,
        };
    }
    return { valid: true };
};
