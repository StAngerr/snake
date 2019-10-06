import React, { useCallback } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikErrors } from 'formik';
import {
  validateEmail,
  validatePassword,
  validatePhone,
  ValidationObject,
} from '../../common/utils/form-validation.utils';
import { formValidation } from '../../common/constants/validation.constants';

interface Props {
  onRegister: (data: RegistrationFormValues) => void;
  toggleForm: () => void;
}
export interface RegistrationFormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  address: string;
  phone: string;
}

export const RegistrationForm = ({ onRegister, toggleForm }: Props) => {
  const getRegisterFormInitialValues = useCallback(
    () => ({
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      address: '',
      phone: '',
    }),
    [],
  );

  const validateForm = useCallback((values: RegistrationFormValues) => {
    const errors: FormikErrors<RegistrationFormValues> = {};
    const emailValidationObj: ValidationObject = validateEmail(values.email);
    const passwordValidationObj: ValidationObject = validatePassword(values.password);
    const phoneValidationObj: ValidationObject = validatePhone(values.phone);
    if (!emailValidationObj.valid) {
      errors.email = emailValidationObj.errorMsg;
    }
    if (!passwordValidationObj.valid) {
      errors.password = passwordValidationObj.errorMsg;
    }
    if (values.password !== values.password) {
      errors.passwordConfirm = formValidation.passwordsMatch;
    }
    if (!phoneValidationObj.valid) {
      errors.phone = phoneValidationObj.errorMsg;
    }
    return errors;
  }, []);

  return (
    <div className="tile is-child">
      <div className="container tile is-vertical is-6">
        <h3 className="title is-3">Create new user</h3>
        <Formik validate={validateForm} onSubmit={onRegister} initialValues={getRegisterFormInitialValues()}>
          <Form>
            <div className="field">
              <div className="field">Name</div>
              <Field className="input" type="text" name="name" />
            </div>
            <div className="field">
              <div className="field">Email</div>
              <Field className="input" type="email" name="email" />
              <ErrorMessage name="email" component="div" className="help is-danger" />
            </div>
            <div className="field">
              <div className="field">Address</div>
              <Field className="input" type="text" name="address" />
            </div>
            <div className="field">
              <div className="field">Phone</div>
              <Field className="input" type="text" name="phone" />
              <ErrorMessage name="phone" component="div" className="help is-danger" />
            </div>
            <div className="field">
              <div className="field">Password</div>
              <Field className="input" type="password" name="password" />
              <ErrorMessage name="password" component="div" className="help is-danger" />
            </div>
            <div className="field">
              <div className="field">Confirm Password</div>
              <Field className="input" type="password" name="passwordConfirm" />
              <ErrorMessage name="passwordConfirm" component="div" className="help is-danger" />
            </div>
            <div className="control">
              <button className="button is-text" onClick={toggleForm}>
                Back to login
              </button>
              <button className="button" type="submit">
                Register
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
