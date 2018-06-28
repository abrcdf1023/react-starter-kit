import { connect } from 'react-redux'
import { getAmiiboList } from '@/redux/modules/entities/amiiboList/selectors'

export const withAmiiboList = connect(state => ({
  amiiboList: getAmiiboList(state),
}))
