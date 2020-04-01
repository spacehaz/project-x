import React from 'react'
import styles from './styles.module'
import text from 'texts'
import classNames from 'classnames'

const Input = ({ label, className, value, type = 'text', placeholder, disabled }) => <div className={classNames(styles.container, className)}>
  <label>
    {label && <div className={styles.label}>{label}</div>}
    <input
      placeholder={placeholder}
      className={styles.input}
      type={type}
      disabled={disabled}
      value={value}
    />
  </label>
</div>

export default Input
