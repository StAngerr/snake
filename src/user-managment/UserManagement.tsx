import React, { useEffect, useState } from 'react';
import { UserList } from './components/UserList';
import { getAllUsers } from '../common/api/user/user-api';
import { User } from '../common/types/User';

interface UsersState {
  users: User[];
}

export const UserManagement = () => {
  const [usersState, setUsers] = useState<UsersState>({ users: [] });
  // const user = { id: 'mock', name: 'mock', email: 'mock@mock.com'};

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUsers();
      setUsers({ ...usersState, users});
    };
    fetchUsers();
  }, []);

  return <section>
      <h3 className="title is-3">User management</h3>
      <UserList users={usersState.users} />
  </section>;
};
