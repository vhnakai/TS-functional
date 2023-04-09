import { usernameCodec } from './username'
import { map, mapLeft } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

it('Deveria validar o nome do usuário corretamente', () => {
  pipe(
    'vhnakai',
    usernameCodec.decode,
    map(result => expect(result).toBe('vhnakai')),
  )
})

it('Deveria retornar um erro caso o nome do usuário seja inválido', () => {
  pipe(
    '#A_333$@**  aaaa',
    usernameCodec.decode,
    mapLeft(error => expect(error[0]?.message).toBe('Invalid username')),
  )
})
