import Immutable from 'immutable'
import reducer from './index'
import actionCreators from '@/redux/modules/actionCreators'
import types from '@/redux/modules/types'

const entities = {
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
    expect(actionCreators.amiiboList.addEntities(entities)).toEqual({
      type: types.amiiboList.addEntities,
      payload: entities,
    })
  })
})

describe('redux modules entities amiiboList reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(Immutable.fromJS({}))
  })

  it(`should handle ${types.amiiboList.addEntities}`, () => {
    expect(reducer(undefined, actionCreators.amiiboList.addEntities(entities)))
      .toEqual(Immutable.fromJS(entities.amiiboList))
  })
})
