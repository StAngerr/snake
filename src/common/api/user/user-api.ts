import { httpService } from '../http-service';
import { users } from './user-urls';
import { User } from '../../types/User';
import { AxiosResponse } from 'axios';

export const getAllUsers = (): Promise<User[]> => {
  return httpService.get<User[]>(users);
};

export const updateUser = (userId: string, user: User): Promise<User> => {
  return httpService.put<User>(`${users}/${userId}`, user);
};

export const deleteUser = (userId: string) => {
  return httpService.delete(`${users}/${userId}`);
};

export const saveNewUser = (user: User): Promise<AxiosResponse<User>> => {
  return httpService.post<User>(users, user).then((resp: AxiosResponse) => resp.data);
};
