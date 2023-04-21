import { Schema } from 'redis-om'

export const userSchema = new Schema('user', {
  username: { type: 'string' },
  password: { type: 'string' },
})
