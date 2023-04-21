import * as t from 'io-ts'
import { usernameCodec } from './types/username'

const userCodecRequired = t.type({
  username: usernameCodec,
})

const userCodecOptional = t.partial({
  token: t.string,
})

export const userCodec = t.intersection([
  userCodecRequired,
  userCodecOptional,
])

export type User = t.TypeOf<typeof userCodec>
export type UserOutput = t.OutputOf<typeof userCodec>

export const createUserCodec = t.type({
  username: usernameCodec,
})

export type CreateUserOutput = t.OutputOf<typeof createUserCodec>
// export type LoginUser = t.TypeOf<typeof loginUserCodec>
// export type LoginUserOutput = t.OutputOf<typeof loginUserCodec>
