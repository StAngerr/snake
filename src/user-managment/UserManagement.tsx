import React, { useCallback, useEffect, useState } from 'react';
import { UserList } from './components/UserList';
import { deleteUser, getAllUsers, updateUser } from '../common/api/user/user-api';
import { User } from '../common/types/User';

interface UsersState {
  users: User[];
}

export const UserManagement = () => {
  const [usersState, setUsers] = useState<UsersState>({ users: [] });

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUsers();
      setUsers({ ...usersState, users });
    };
    fetchUsers();
  }, []);

  const handleUserUpdate = useCallback(
    (userToUpdate: User) => {
      updateUser(userToUpdate.id, userToUpdate).then((updatedUser: User) => {
        setUsers({
          ...usersState,
          users: usersState.users.map((user: User) => (user.id === updatedUser.id ? updatedUser : user)),
        });
      });
    },
    [usersState],
  );
  const handleDeleteUser = useCallback((id: string) => {
    deleteUser(id).then((res) => {
      console.log('User was removed');
    });
  }, []);
  const createUser = useCallback(() => {
    return 1;
  }, []);

  return (
    <section>
      <h3 className="title is-3">User management</h3>
      <UserList updateUser={handleUserUpdate} users={usersState.users} deleteUser={handleDeleteUser} />
    </section>
  );
};
