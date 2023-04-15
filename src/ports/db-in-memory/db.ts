import { DBUser } from '@/ports/adapters/db/types'

type UserID = string

type DBInMemory = {
  users: { [id: string]: DBUser }
  usersByUsername: { [username: string]: UserID }
}

export const dbInMemory: DBInMemory = {
  users: {},
  usersByUsername: {},
}
