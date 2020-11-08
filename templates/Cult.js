import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { RichText } from '../components/Prismic'
import Slices from '../components/Cult/Slices'
import styles from '../styles/Cult/Template.module.scss'

const Cult = ({ data }) => {
  const {
    heading,
    bg_image,
    // music,
    body,
  } = data
  return (
    <div
      className={styles.bg}
      style={{ backgroundImage: `url(${bg_image.url})` }}
    >
      <div className='container'>
        <div className={clsx('rte', styles.headings)}>
          <RichText content={heading} />
        </div>
        <Slices slices={body} />
      </div>
    </div>
  )
}

Cult.propTypes = {
  data: PropTypes.object,
}

export default Cult
