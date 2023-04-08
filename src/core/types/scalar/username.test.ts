import { Username } from './username'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

it('Deveria validar o nome do usuário corretamente', () => {
  pipe(
    'vhnakai',
    Username.decode,
    E.map(result => expect(result).toBe('vhnakai')),
  )
})

it('Deveria retornar um erro caso o nome do usuário seja inválido', () => {
  pipe(
    '#A_333$@**  aaaa',
    Username.decode,
    E.mapLeft(error => expect(error[0]?.message).toBe('Invalid username')),
  )
})
