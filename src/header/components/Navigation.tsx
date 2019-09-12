import React, { useCallback } from 'react';
import { History } from 'history';

interface Props {
  history?: History;
}

export const Navigation = ({ history }: Props) => {
  const logout = useCallback(() => {
    localStorage.removeItem('token');
    history.push('/login');
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img src="../../../assets/Colorful_Animal_Snake.svg" alt="snake-logo" />
      </div>
      <div className="navbar-menu is-grouped">
        <div className="navbar-item">Home</div>
        <div className="navbar-item">Settings</div>
        <div className="navbar-item">About</div>
      </div>
      <div className="control">
        <a className="button" onClick={logout}>
          Logout
        </a>
      </div>
    </div>
  );
};
