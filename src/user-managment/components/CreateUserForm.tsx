import { ErrorMessage, Field, Form, Formik, FormikErrors } from 'formik';
import React, { useCallback, useMemo } from 'react';
import { CreateForm } from '../types';
import { validateEmail } from '../../common/utils/form-validation.utils';

interface Props {
  onSubmit: (data: CreateForm) => void;
}

export const CreateUserForm = ({ onSubmit }: Props) => {
  const initialValues: CreateForm = useMemo(
    () => ({
      username: '',
      email: '',
      address: '',
      phone: '',
    }),
    [],
  );

  const validate = useCallback((values: CreateForm): FormikErrors<CreateForm> => {
    const errors: FormikErrors<CreateForm> = {};
    const emailValidationObject = validateEmail(values.email);
    const usernameValidationObject = validateEmail(values.email);
    if (!emailValidationObject.valid) {
      errors.email = emailValidationObject.errorMsg;
    }
    if (!usernameValidationObject.valid) {
      errors.username = usernameValidationObject.errorMsg;
    }
    return errors;
  }, []);

  const handleSubmit = (values: CreateForm) => {
    onSubmit(values);
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues} validate={validate}>
      <Form>
        <label>
          <span>Username</span>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" />
        </label>
        <label>
          <span>email</span>
          <Field type="text" name="email" />
          <ErrorMessage name="email" component="div" />
        </label>
        <label>
          <span>address</span>
          <Field type="text" name="address" />
        </label>
        <label>
          <span>phone</span>
          <Field type="text" name="phone" />
        </label>
        <button type="submit">Create</button>
      </Form>
    </Formik>
  );
};
