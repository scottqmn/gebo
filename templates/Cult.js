import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { RichText } from '../components/Prismic'
import Banner from '../components/Cult/Banner'
import Logo from '../components/Cult/Logo'
import styles from '../styles/Cult/Template.module.scss'

const Cult = ({ data }) => {
  const {
    // banner,
    heading,
    body,
    bg_image,
    logo,
    // music,
    video,
  } = data
  return (
    <div
      className={styles.bg}
      style={{ backgroundImage: `url(${bg_image.url})` }}
    >
      <div className='container'>
        {/* <Banner text={banner} /> */}
        <div className={clsx('rte', styles.headings)}>
          <RichText content={heading} />
        </div>
        <Logo logo={logo} video={video} />
        <div className='rte'>
          <RichText content={body} />
        </div>
      </div>
    </div>
  )
}

Cult.propTypes = {
  data: PropTypes.object,
}

export default Cult
