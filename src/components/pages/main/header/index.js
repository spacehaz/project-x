import React from 'react'
import styles from './styles.module.scss'

export default ({ title, description }) => <div className={styles.header}>
  <h1 className={styles.title}>{title}</h1>
  <h4 className={styles.description}>{description}</h4>
</div>