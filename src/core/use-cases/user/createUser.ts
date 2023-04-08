import { tryCatch, TaskEither } from 'fp-ts/TaskEither'
import { toError } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { InputUser } from '@/core/types/user'

export type OutsideCreateUser<A> = (data: InputUser) => Promise<A>;

type CreateUser = <A>(
  outsideCreateUser: OutsideCreateUser<A>
) => (data: InputUser) => TaskEither<Error, A>;

export const createUser: CreateUser = (outsideCreateUser) => (data: InputUser) => {
  return pipe(tryCatch(() => outsideCreateUser(data), toError))
}
