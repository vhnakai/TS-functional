import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'
import { createUser, OutsideCreateUser } from './createUser'
import { User, InputUser } from '@/core/types/user'
import { unsafeUsername } from '@/config/tests/fixtures'

const UserOK: OutsideCreateUser<User> = async ({ username }: InputUser) => {
  return { username, token: '#12345' }
}

const data: InputUser = {
  username: unsafeUsername('john'),
}

const awantedUser: User = {
  username: unsafeUsername('john'),
  token: '#12345',
}

it('Deve retornar o nome do usuário e o token dele', async () => {
  return pipe(
    data,
    createUser(UserOK),
    TE.map((result) => expect(result).toStrictEqual(awantedUser)),
  )()
})
