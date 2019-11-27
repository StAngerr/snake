import React, { useContext } from 'react';
import SnackBarContext from '../common/context/SnackBarContext';
import { SnackBarEnum } from '../common/types/SnackBar';

export const Chat = () => {
  const showSnackBar = useContext(SnackBarContext);
  return (
    <div>
      <h3 className="title is-3">Chat</h3>
      <button onClick={() => showSnackBar(SnackBarEnum.info, 'Hello world')}>Show snackbar</button>
    </div>
  );
};
