import { Query, Resolver } from 'type-graphql';
import UserService from '@/api/domain/user/services/UserService';
import { User } from '@/common/graphql/types';

@Resolver(User)
export default class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return UserService.getAllUsers();
  }
}