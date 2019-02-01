import React from 'react'
import PropTypes from 'prop-types'
import Icon from './components/Icon'
import { proptypes } from './components/propTypes'
import { withOrientation } from './components/enhancers'

const IconCaret = ({ orientation, ...props }) => {
  return (
    <Icon id={`nav-angle${orientation}`} {...props} />
  )
}

IconCaret.propTypes = {
  /** Orientation of the icon */
  orientation: PropTypes.string.isRequired,
  ...proptypes
}

export default withOrientation(IconCaret)