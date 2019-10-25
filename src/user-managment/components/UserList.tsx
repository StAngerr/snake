import { User } from '../../common/types/User';
import React from 'react';
import { UserListItem } from './UserListItem';

interface Props {
  users: User[];
}

export const UserList = ({ users }: Props) => {
  return (
    <section>
      {users.map((user: User) => (
        <UserListItem removeItem={() => undefined} {...{ user }} />
      ))}
    </section>
  );
};
