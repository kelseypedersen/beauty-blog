import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'

export default () => (
  <header className={styles.header}>
    <Link to="/">Dryftwell</Link>
  </header>
)
