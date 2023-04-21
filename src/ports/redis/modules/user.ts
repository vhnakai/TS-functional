// import { CreateUserInDB } from '@/ports/adapters/db/types'
// import { redis } from '../redis'
// import { Repository, EntityId } from 'redis-om'
// import { userSchema } from './userSchema'

// export const createUserInDB: CreateUserInDB = async (data) => {
//   try {
//     const userRepository = new Repository(userSchema, redis)

//     const user = {
//       username: data.username,
//       password: data.password,
//     }

//     const result = await userRepository.save(user)

//     const { username, password } = result

//     return { id: result[EntityId], username, password }
//   } catch (e) {
//     throw new Error('User already registered')
//   }
// }
