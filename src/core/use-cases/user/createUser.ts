import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { InputUser } from '@/core/types/user'

export type OutsideCreateUser<A> = (data: InputUser) => Promise<A>;

type CreateUser = <A>(
  outsideCreateUser: OutsideCreateUser<A>
) => (data: InputUser) => TE.TaskEither<Error, A>;

export const createUser: CreateUser = (outsideCreateUser) => (data: InputUser) => {
  return pipe(TE.tryCatch(() => outsideCreateUser(data), E.toError))
}
