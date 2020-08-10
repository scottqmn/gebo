import React from "react"
import PropTypes from "prop-types"
import styles from "../styles/Layout.module.css"

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

export default Layout
