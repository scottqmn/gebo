import React from 'react'
import styles from '../../styles/Cult/Logo.module.scss'

const Logo = () => (
  <div className={styles.wrap}>
    <img src='/cult/logo.png' alt='Gebo Life logo' />
    <video autoPlay loop muted playsInline>
      <source src='/cult/globe.mp4' type='video/mp4' />
    </video>
  </div>
)

export default Logo
