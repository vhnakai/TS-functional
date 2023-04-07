import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { User } from '@/core/types/user'

export type OutsideCreateUser<A> = (data: User) => Promise<A>;

type CreateUser = <A>(
  outsideCreateUser: OutsideCreateUser<A>
) => (data: User) => TE.TaskEither<Error, A>;

export const createUser: CreateUser = (outsideCreateUser) => (data) => {
  return pipe(TE.tryCatch(() => outsideCreateUser(data), E.toError))
}
