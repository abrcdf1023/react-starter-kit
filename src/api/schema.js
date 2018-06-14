import { schema } from 'normalizr'

const amiibo = new schema.Entity('amiiboList', {}, {
  idAttribute: 'tail',
})
export const amiiboList = [amiibo]
