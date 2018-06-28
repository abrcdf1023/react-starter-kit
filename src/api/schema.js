import { schema } from 'normalizr'

const amiibo = new schema.Entity('amiiboList', {}, {
  idAttribute: 'tail',
})
export const amiiboList = [amiibo]

const character = new schema.Entity('characterList', {}, {
  idAttribute: 'key',
})
export const characterList = [character]
