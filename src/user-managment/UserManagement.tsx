import React, { useCallback, useEffect, useState } from 'react';
import { UserList } from './components/UserList';
import { deleteUser, getAllUsers, updateUser } from '../common/api/user/user-api';
import { User } from '../common/types/User';
import { BtnDialog } from '../common/components/dialog/BtnDialog';
import { CreateUserForm } from './components/CreateUserForm';
import { CreateForm } from './types';

interface UsersState {
  users: User[];
}

export const UserManagement = () => {
  const [usersState, setUsers] = useState<UsersState>({ users: [] });
  const [createDialogOpened, setCreateDialogOpened] = useState<boolean>(false);

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
  const createUser = useCallback((data: CreateForm) => {
    console.log('Create user: ', data);
    return 1;
  }, []);

  return (
    <section>
      <h3 className="title is-3">User management</h3>
      <BtnDialog btnText="Add user" isOpened={createDialogOpened}>
        <CreateUserForm onSubmit={createUser} />
      </BtnDialog>
      <UserList updateUser={handleUserUpdate} users={usersState.users} deleteUser={handleDeleteUser} />
    </section>
  );
};
