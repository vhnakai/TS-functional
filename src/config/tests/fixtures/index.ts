
import { Username } from '@/core/types/scalar/username'
import { TypeOf } from 'io-ts'

export function unsafeUsername (value: string): TypeOf<typeof Username> {
  return value as any
}
