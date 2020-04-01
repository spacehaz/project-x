import React from 'react'
import styles from './styles.module'

const Button = ({ children }) => <button className={styles.container}>
  {children}
</button>
export default Button
