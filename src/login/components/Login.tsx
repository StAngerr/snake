import * as React from 'react';
import { History } from 'history';
import { httpService } from '../../common/api/http-service';
import { ErrorMessage, Field, Form, Formik, FormikErrors } from 'formik';
import { useCallback } from 'react';
import { validateEmail, validatePassword, ValidationObject } from '../../common/utils/form-validation.utils';
import { AxiosResponse } from 'axios';

interface Props {
  history: History;
}

interface LoginFormValues {
  email: string;
  password: string;
}

export const Login = ({ history }: Props) => {
  const login = ({ email, password }: LoginFormValues) => {
    httpService
      .post('http://www.localhost:3000/api/auth/login', {
        email,
        password,
      })
      .then((response: AxiosResponse) => {
        localStorage.setItem('token', response.data.token);
        history.push('/home');
      });
  };

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
    <section className="section">
      <div className="container tile is-vertical is-6">
        <h2 className="title">Snake 🐍 </h2>
        <Formik validate={validateForm} onSubmit={login} initialValues={getLoginFormInitialValues()}>
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
              <button className="button is-text">Register</button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};
