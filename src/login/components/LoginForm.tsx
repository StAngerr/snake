import * as React from 'react';
import { ErrorMessage, Field, Form, Formik, FormikErrors } from 'formik';
import { useCallback } from 'react';
import { validateEmail, validatePassword, ValidationObject } from '../../common/utils/form-validation.utils';

interface Props {
  onLogin: ({ email, password }: LoginFormValues) => void;
  toggleForm: () => void;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginForm = ({ onLogin, toggleForm }: Props) => {
  const getLoginFormInitialValues = useCallback((): LoginFormValues => ({ email: '', password: '' }), []);

  const validateForm = useCallback((values: LoginFormValues): FormikErrors<LoginFormValues> => {
    const errors: FormikErrors<LoginFormValues> = {};
    const emailValidationObj: ValidationObject = validateEmail(values.email);
    const passwordValidationObj: ValidationObject = validatePassword(values.password);
    if (!emailValidationObj.valid) {
      errors.email = emailValidationObj.errorMsg;
    }
    if (!passwordValidationObj.valid) {
      errors.password = passwordValidationObj.errorMsg;
    }
    return errors;
  }, []);

  return (
    <section className="tile is-child">
      <div className="container tile is-vertical is-6">
        <h2 className="title">Snake 🐍</h2>
        <Formik validate={validateForm} onSubmit={onLogin} initialValues={getLoginFormInitialValues()}>
          <Form>
            <div className="field">
              <label className="label">Email</label>
              <Field className="input" type="email" name="email" />
              <ErrorMessage name="email" component="div" className="help is-danger" />
            </div>
            <div className="field">
              <label className="label">Password</label>
              <Field className="input" type="password" name="password" />
              <ErrorMessage name="password" component="div" className="help is-danger" />
            </div>
            <div className="control">
              <button className="button" type="submit">
                Login
              </button>
              <button className="button is-text" onClick={toggleForm}>
                Register
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};
