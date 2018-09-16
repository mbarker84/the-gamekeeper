import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.scss'

const Header = ({ siteTitle, siteDescription }) => (
  <header className={styles.header}>
    <div>
      <h1 className={styles.siteTitle}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          <span className={styles.mainTitle}>{siteTitle}</span>
        </Link>
        <span className={styles.subtitle}>{siteDescription}</span>
      </h1>
    </div>
  </header>
)

export default Header
