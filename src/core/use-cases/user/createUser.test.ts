import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'

import { createUser, OutsideCreateUser } from './createUser'
import { User, InputUser } from '@/core/types/user'

const UserOK: OutsideCreateUser<User> = async ({ username }: InputUser) => {
  return { username, token: '#12345' }
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
