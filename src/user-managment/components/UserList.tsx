import { User } from '../../common/types/User';
import React from 'react';

interface Props {
  users: User[];
}

export const UserList = ({ users }: Props) => {
  return (
    <section>
      {users.map((user: User) => (
        <p>{user.name}</p>
      ))}
    </section>
  );
};
