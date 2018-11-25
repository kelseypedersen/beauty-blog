import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Guides</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">Insiders Scoop</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">Top Picks</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">Travel Gear</Link>
      </li>
    </ul>
  </nav>
)
