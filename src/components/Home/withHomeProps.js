import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getCharacterList } from '@/redux/modules/entities/characterList/selectors'
import { getAmiiboList } from '@/redux/modules/entities/amiiboList/selectors'
import { getAmiiboListIsGetting, getAmiiboListError, getAmiiboListErrorMsg } from '@/redux/modules/ui/Home/selectors'

import actionCreators from '@/redux/modules/actionCreators'

const mapStateToProps = state => ({
  entities: {
    characterList: getCharacterList(state),
    amiiboList: getAmiiboList(state),
  },
  amiiboList: {
    isGetting: getAmiiboListIsGetting(state),
    error: getAmiiboListError(state),
    errorMsg: getAmiiboListErrorMsg(state),
  },
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actionCreators.ui.home,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)
