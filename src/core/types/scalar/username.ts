import { brand, string, Branded, TypeOf } from 'io-ts'
import { withMessage } from 'io-ts-types'

type UsernameBrand = {
  readonly Username: unique symbol
}

export const usernameCodec = withMessage(
  brand(
    string,
    (value): value is Branded<string, UsernameBrand> => isUsername(value),
    'Username',
  ),
  () => 'Invalid username',
)

export type Username = TypeOf<typeof usernameCodec>

export function isUsername (value: string) {
  return /^[a-z](?:[a-z]|[0-9]|#)+?}$/.test(value)
}
