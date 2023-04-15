import { InputUser, User } from '../types/user'
import { createUser as createUserCore, OutsideCreateUser } from './createUser'

export const createUser = (outsideCreateUser: OutsideCreateUser<User>) => (data: InputUser) => createUserCore(outsideCreateUser)(data)
