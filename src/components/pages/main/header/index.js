import React from 'react'
import styles from './styles.module.scss'

export default ({ title, description }) => <div className={styles.header}>
  <h1 className={styles.title}>{title}</h1>
  <h2 className={styles.description}>{description}</h2>
</div>