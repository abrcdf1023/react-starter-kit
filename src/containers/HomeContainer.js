import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Home from '@/components/Home'

import * as selectors from '@/redux/modules/ui/Home/selectors'
import { getAmiiboList } from '@/redux/modules/entities/amiiboList/selectors'

import { fetchGetAmiibo, fetchGetAmiiboCancel } from '@/redux/modules/ui/Home/actions'

const mapStateToProps = state => ({
  amiiboList: getAmiiboList(state),

  isGetting: selectors.getAmiiboIsGetting(state),
  error: selectors.getAmiiboError(state),
  errorMsg: selectors.getAmiiboErrorMsg(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchGetAmiibo,
  fetchGetAmiiboCancel,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
