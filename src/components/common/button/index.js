import React from 'react'
import classNames from 'classnames'
import styles from './styles.module'

const Button = ({ children, inverted, size = 'default', onClick }) => <button
  className={classNames(styles.container, {
    [styles.small]: size === 'small',
    [styles.inverted]: inverted,
  })}
  onClick={_ => onClick && onClick()}
>
  {children}
</button>
export default Button
