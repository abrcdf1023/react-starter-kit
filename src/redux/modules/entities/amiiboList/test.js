import Immutable from 'immutable'
import reducer from './index'
import * as actions from './actions'
import * as types from './types'

const input = {
  amiibo: [
    {
      amiiboSeries: 'Super Smash Bros.',
      character: 'Mario',
      gameSeries: 'Super Mario',
      head: '00000000',
      image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png',
      name: 'Mario',
      release: {
        au: '2014-11-29',
        eu: '2014-11-28',
        jp: '2014-12-06',
        na: '2014-11-21',
      },
      tail: '00000002',
      type: 'Figure',
    },
  ],
}

const output = {
  amiiboList: {
    '00000002': {
      amiiboSeries: 'Super Smash Bros.',
      character: 'Mario',
      gameSeries: 'Super Mario',
      head: '00000000',
      image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png',
      name: 'Mario',
      release: {
        au: '2014-11-29',
        eu: '2014-11-28',
        jp: '2014-12-06',
        na: '2014-11-21',
      },
      tail: '00000002',
      type: 'Figure',
    },
  },
}

describe('redux modules entities amiiboList actions', () => {
  it('should add amiiboList Entities', () => {
    expect(actions.addAmiiboListEntities(output)).toEqual({
      type: types.AMIIBOLIST_ADD_ENTITIES,
      payload: output,
    })
  })
})

describe('redux modules entities amiiboList reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(Immutable.fromJS({}))
  })

  it(`should handle ${types.AMIIBOLIST_ADD_ENTITIES}`, () => {
    expect(reducer(undefined, actions.addAmiiboListEntities(output)))
      .toEqual(Immutable.fromJS(output.amiiboList))
  })
})
