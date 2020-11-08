import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/Cult/Banner.module.scss'

const Banner = ({ text }) => {
  const [open, setOpen] = useState(true)
  const handleClick = () => setOpen(false)

  return open ? (
    <div className={styles.outer}>
      <div className={styles.inner}>{text}</div>
    </div>
  ) : null
}

Banner.propTypes = { text: PropTypes.string }

export default Banner
