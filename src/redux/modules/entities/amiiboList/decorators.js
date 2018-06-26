import { connect } from 'react-redux'

export const withAmiiboList = connect(state => ({
  amiiboList: state.toJS().entities.amiiboList,
}))
