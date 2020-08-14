import PropTypes from 'prop-types'

export const PrismicImage = PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
})

export const PrismicAudio = PropTypes.shape({
  url: PropTypes.string.isRequired,
})
