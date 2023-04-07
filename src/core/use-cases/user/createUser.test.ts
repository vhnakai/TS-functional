import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'

import { createUser, OutsideCreateUser } from './createUser'
import { User } from '@/core/types/user'

const UserOK: OutsideCreateUser<User> = async (info: User) => {
  return info
}

const data: User = {
  username: 'john',
  token: '#12345',
}

it('Deve retornar o nome do usuário e o token dele', async () => {
  return pipe(
    data,
    createUser(UserOK),
    TE.map((result) => expect(result).toBe(data)),
  )()
})
