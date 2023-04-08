import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'

type UsernameBrand = {
  readonly Username: unique symbol
}

export const Username = withMessage(
  t.brand(
    t.string,
    (value): value is t.Branded<string, UsernameBrand> => isUsername(value),
    'Username',
  ),
  () => 'Invalid username',
)

function isUsername (value: string) {
  return /^\S+\w{8,32}\S{1,}$/.test(value)
}
