import actionCreators from '@/redux/modules/actionCreators'

export const {
  fetchGetCharacterList, fetchGetCharacterListSuccess,
  fetchGetCharacterListFailure,
  fetchGetAmiiboList, fetchGetAmiiboListSuccess,
  fetchGetAmiiboListFailure, fetchGetAmiiboListCancel,
} = actionCreators.pages.home
