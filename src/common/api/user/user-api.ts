import { httpService } from '../http-service';
import { users } from './user-urls';
import { User } from '../../types/User';

export const getAllUsers = (): Promise<User[]> => {
  return httpService.get<User[]>(users);
};
