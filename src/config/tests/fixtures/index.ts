
import { Username } from '@/core/types/scalar/username'
import { TaskEither, map, mapLeft } from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/function'

export function unsafeUsername (value: string): Username {
  return value as any
}

type Callback = (a: unknown) => unknown
type MapAll = (fn: Callback) => (data: TaskEither<unknown, unknown>) =>
  TaskEither<unknown, unknown>

export const mapAll: MapAll = (fn) => (data) => {
  return pipe(
    data,
    map(fn),
    mapLeft(fn),
  )
}
