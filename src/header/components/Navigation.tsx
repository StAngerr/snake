import React, { useCallback } from 'react';
import { History } from 'history';
import { Link } from 'react-router-dom';

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
        <div className="navbar-item">
          <Link to={'/home'}>Home</Link>
        </div>
        <div className="navbar-item">
          <Link to={'/settings'}>Settings</Link>
        </div>
        <div className="navbar-item">
          <Link to={'/about'}>About</Link>
        </div>
        <div className="navbar-item">
          <Link to={'/users'}>Users</Link>
        </div>
        <div className="navbar-item">
          <Link to={'/chat'}>Chat</Link>
        </div>
      </div>
      <div className="control">
        <a className="button" onClick={logout}>
          Logout
        </a>
      </div>
    </div>
  );
};
