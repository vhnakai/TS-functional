import { createClient } from 'redis'

/* pulls the Redis URL from .env */
const url = process.env.REDIS_URL

/* create and open the Redis OM Client */
const client = createClient({ url })

console.log('Redis OM Client is connected')
export default client
