import { connect } from 'react-redux'

export const amiiboListConnect = connect(state => ({
  amiiboList: state.toJS().entities.amiiboList,
}))