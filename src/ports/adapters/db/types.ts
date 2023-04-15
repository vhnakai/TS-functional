// CreateUserOutput,
// LoginUserOutput,

import {
  UserOutput,
} from '@/core/user/types'

export type DBUser = Omit<UserOutput, 'token'> & {
  id: string
  password: string
}

// type CreateUserData = CreateUserOutput & {
//   password: string
// }

// export type CreateUserInDB<T = DBUser> = (data: CreateUserData) => Promise<T>

// export type Login<T = DBUser> = (data: LoginUserOutput) => Promise<T | null>
