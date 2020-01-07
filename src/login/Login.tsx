import { LoginForm, LoginFormValues } from './components/LoginForm';
import React, { useCallback, useState } from 'react';
import { httpService } from '../common/api/http-service';
import { AxiosResponse } from 'axios';
import { History } from 'history';
import { RegistrationForm, RegistrationFormValues } from './components/RegistrationForm';

interface Props {
  history: History;
}

interface FormOpenedState {
  login: boolean;
  registration: boolean;
  changePassword: boolean;
}

export const Login = ({ history }: Props) => {
  const [formOpened, setOpenedForm] = useState<FormOpenedState>({
    login: true,
    registration: false,
    changePassword: false,
  });
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

  const register = (regData: RegistrationFormValues) => {
    httpService.post('http://www.localhost:3000/api/auth/register', regData).then((response: AxiosResponse) => {
      localStorage.setItem('token', response.data.token);
      history.push('/home');
    });
  };

  const toggleForms = useCallback(
    (formToOpen: string) =>
      setOpenedForm({
        login: false,
        registration: false,
        changePassword: false,
        [formToOpen]: true,
      }),
    [],
  );
  return (
    <div className="tile is-parent">
      {formOpened.login && <LoginForm onLogin={login} toggleForm={() => toggleForms('registration')} />}
      {formOpened.registration && <RegistrationForm onRegister={register} toggleForm={() => toggleForms('login')} />}

        <img src="/assets/Colorful_Animal_Snake.svg" alt=""/>
    </div>
  );
};
