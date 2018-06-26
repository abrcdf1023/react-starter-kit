import actionCreators from './actionCreators'

export const addAmiiboListEntities = actionCreators.entities.amiiboList.add().type

export const fetchGetHomeAmiibo = actionCreators.ui.home.fetchGetAmiibo().type
export const fetchGetHomeAmiiboSuccess = actionCreators.ui.home.fetchGetAmiiboSuccess().type
export const fetchGetHomeAmiiboFailure = actionCreators.ui.home.fetchGetAmiiboFailure().type
export const fetchGetHomeAmiiboCancel = actionCreators.ui.home.fetchGetAmiiboCancel().type
