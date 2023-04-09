import { TypeOf, string, type } from 'io-ts'
import { usernameCodec } from './scalar'

// Expectativa de Um objeto User
export const userCodec = type({
  username: usernameCodec,
  token: string,
})

export type User = TypeOf<typeof userCodec>

export const inputUserCodec = type({
  username: usernameCodec,
})

// Expectativa de Um entrada para criar User
export type InputUser = TypeOf<typeof inputUserCodec>
