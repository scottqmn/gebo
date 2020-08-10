import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/ImageDisplay.module.css'

const ImageDisplay = ({ image }) => {
  const images = []
  for (let i = 0; i < 4; i += 1) {
    images.push(<img key={`image-${i}`} className={styles.item} src={image.url} alt={image.alt} />)
  }
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.grid}>{images}</div>
      </div>
    </div>
  )
}

ImageDisplay.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
}

export default ImageDisplay
