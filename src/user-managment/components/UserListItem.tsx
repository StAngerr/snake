import React, { LegacyRef, useCallback, useEffect, useRef, useState } from 'react';

import { User } from '../../common/types/User';

interface Props {
  user: User;
  removeUser: (id: string) => void;
  updateUser: (user: User) => void;
}

export const UserListItem = ({ user, removeUser, updateUser }: Props) => {
  const nameRef: LegacyRef<HTMLInputElement> = useRef(null);
  const [name, setName] = useState('');

  useEffect(() => setName(user.name), [user]);

  const editName = useCallback(() => {
    if (nameRef) {
      nameRef.current.focus();
    }
  }, [user, nameRef]);

  const handleRemove = useCallback(() => {
    removeUser(user.id);
  }, [user]);

  const onNameChanged = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const saveChanges = useCallback(() => {
    if (user.name !== name) {
      updateUser({
        ...user,
        name,
      });
    }
  }, [name, user]);

  return (
    <div>
      <input ref={nameRef} onChange={onNameChanged} onBlur={saveChanges} defaultValue={user.name} />
      <div className="controls">
        <button onClick={editName}>
          <i title="name" className="fas fa-pen" />
        </button>
        <button onClick={handleRemove}>
          <i title="remove" className="fas fa-backspace" />
        </button>
      </div>
    </div>
  );
};
