import React from 'react'
import styles from './styles.module'
import text from 'texts'
import classNames from 'classnames'

const Input = ({ label, icon, className, value, type = 'text', placeholder, disabled, onChange }) => <div className={classNames(styles.container, className)}>
  <label>
    {label && <div className={styles.label}>{label}</div>}
    <div className={classNames(styles.input, {
      [styles.withIcon]: icon
    })}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <input
        placeholder={placeholder}
        className={styles.field}
        type={type}
        onChange={e => {
          const value = e.target.value
          onChange && onChange({ value })
        }}
        disabled={disabled}
        value={value}
      />
    </div>
  </label>
</div>

export default Input
