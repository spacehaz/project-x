import React from 'react'
import classNames from 'classnames'
import styles from './styles.module'

const Button = ({ children, inverted, size = 'default', onClick, className, disabled }) => <button
  className={classNames(styles.container, className, {
    [styles.small]: size === 'small',
    [styles.inverted]: inverted,
    [styles.disabled]: disabled
  })}
  onClick={_ => !disabled && onClick && onClick()}
>
  {children}
</button>
export default Button
