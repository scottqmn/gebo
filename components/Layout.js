import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

Layout.defaultProps = {
  children: null,
}

export default Layout
