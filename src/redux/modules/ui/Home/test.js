import configureMockStore from 'redux-mock-store'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { createEpicMiddleware } from 'redux-observable'
import * as api from '@/api'
import * as schema from '@/api/schema'

import { fetchGetAmiiboEpic } from './epics'
import { actionCreators, types } from '@/redux/modules/actionCreators'

describe('Test Home Epics', () => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: { api, schema },
  })
  const mockStore = configureMockStore([epicMiddleware])
  const mockAxios = new MockAdapter(axios)
  const store = mockStore()

  epicMiddleware.run(fetchGetAmiiboEpic)
 
  afterEach(() => {
    mockAxios.reset()
    store.clearActions()
  })

  it('fetchGetAmiiboEpic', (done) => {
    const payload = {
      name: 'mario',
    }
    const response = {
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
    const entity = {
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
    mockAxios.onGet('http://www.amiiboapi.com/api/amiibo/?name=mario').reply(200, response)
    store.dispatch(actionCreators.home.fetchGetAmiibo(payload))
    setTimeout(() => {
      expect(store.getActions()).toEqual([
        { type: types.home.fetchGetAmiibo, payload },
        { type: types.home.fetchGetAmiiboSuccess, payload: response },
        { type: types.amiiboList.addEntities, payload: entity },
      ])
      done()
    }, 600)
  })
})