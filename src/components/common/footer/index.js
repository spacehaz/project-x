import React from 'react'
import styles from './styles.module'

const Footer = () => <div className={styles.container}>{+(new Date).getFullYear()}</div>
export default Footer
