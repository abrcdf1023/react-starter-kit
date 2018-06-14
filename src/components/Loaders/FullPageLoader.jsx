import React from 'react'
import PropTypes from 'prop-types'
import { Loader, Dimmer } from 'semantic-ui-react'

import * as styles from './FullPageLoader.scss'

const FullPageLoader = ({ message, show }) => {
  if (!show) return null
  return (
    <div className={styles.fullpage}>
      <Dimmer active>
        <Loader size="large">{message}</Loader>
      </Dimmer>
    </div>
  )
}

FullPageLoader.defaultProps = {
  message: 'Page Loading...',
  show: true,
}

FullPageLoader.propTypes = {
  message: PropTypes.string,
  show: PropTypes.bool,
}

export default FullPageLoader
