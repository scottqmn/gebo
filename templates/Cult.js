import React from 'react'
import PropTypes from 'prop-types'
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
        <div className={styles.headings}>
          <RichText content={heading} />
        </div>
        <Logo logo={logo} video={video} />
        <RichText content={body} />
      </div>
    </div>
  )
}

Cult.propTypes = {
  data: PropTypes.object,
}

export default Cult
