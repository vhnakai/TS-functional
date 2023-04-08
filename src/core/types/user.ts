import { Username } from './scalar'
import { TypeOf } from 'io-ts'
// Expectativa de Um objeto User
export type User = {
  username: TypeOf<typeof Username>
  token: string
}

// Expectativa de Um entrada para criar User
export type InputUser = {
  username: TypeOf<typeof Username>
}
