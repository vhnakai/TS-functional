import { pipe } from 'fp-ts/function'
import { createUser, OutsideCreateUser } from './createUser'
import { User, InputUser } from '@/core/user/types/user'
import { mapAll, unsafeUsername } from '@/config/tests/fixtures'

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
    mapAll((result) => expect(result).toStrictEqual(awantedUser)),
  )()
})
