import React from 'react'
import { Image } from '../Prismic'
import { prismicImagePropType } from '../../constants/prop-types'
import styles from '../../styles/Cult/Logo.module.scss'

const Logo = ({ logo }) => (
  <div className={styles.wrap}>
    <Image content={logo} />
    <video autoPlay loop muted playsInline>
      <source src='/cult/globe.mp4' type='video/mp4' />
    </video>
  </div>
)

Logo.propTypes = { logo: prismicImagePropType }

export default Logo
