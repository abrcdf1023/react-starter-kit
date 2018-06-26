import { connect } from 'react-redux'

export const amiiboListEntity = connect(state => ({
  amiiboList: state.toJS().entities.amiiboList,
}))