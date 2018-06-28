import { connect } from 'react-redux'
import { getCharacterList } from '@/redux/modules/entities/characterList/selectors'
import { getAmiiboList } from '@/redux/modules/entities/amiiboList/selectors'
import { getAmiiboListIsGetting, getAmiiboListError, getAmiiboListErrorMsg } from '@/redux/modules/ui/Home/selectors'

export default connect(state => ({
  characterList: getCharacterList(state),
  amiiboList: getAmiiboList(state),
  isGetting: getAmiiboListIsGetting(state),
  error: getAmiiboListError(state),
  errorMsg: getAmiiboListErrorMsg(state),
}))
