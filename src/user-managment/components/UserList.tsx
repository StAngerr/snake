import { User } from '../../common/types/User';
import React from 'react';
import { UserListItem } from './UserListItem';

interface Props {
  users: User[];
  updateUser: (user: User) => void;
  deleteUser: (id: string) => void;
}

export const UserList = ({ users, updateUser, deleteUser }: Props) => {
  return (
    <section>
      {users.map((user: User) => (
        <UserListItem updateUser={updateUser} key={user.id} removeUser={deleteUser} {...{ user }} />
      ))}
    </section>
  );
};
