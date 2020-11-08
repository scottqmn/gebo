import React from 'react'
import { Image } from '../Prismic'
import {
  prismicImagePropType,
  prismicMediaPropType,
} from '../../constants/prop-types'
import styles from '../../styles/Cult/Logo.module.scss'

const Logo = ({ logo, video }) => (
  <div className={styles.wrap}>
    <Image content={logo} />
    <video autoPlay loop muted playsInline>
      <source src={video.url} type='video/mp4' />
    </video>
  </div>
)

Logo.propTypes = {
  logo: prismicImagePropType,
  video: prismicMediaPropType,
}

export default Logo
