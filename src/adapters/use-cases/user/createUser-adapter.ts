import { InputUser, User } from '@/core/types/user'
import { createUser as createUserCore, OutsideCreateUser } from '@/core/use-cases/user/createUser'

export const creteUser = (outsideCreateUser: OutsideCreateUser<User>) => (data: InputUser) => createUserCore(outsideCreateUser)(data)
