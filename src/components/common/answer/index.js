import React from 'react'
import styles from './styles.module'
import classNames from 'classnames'

const Answer = ({ text, selectable, selected, onAnswer, id, className }) => <div
  className={classNames(styles.container, className, {
    [styles.selectable]: selectable,
    [styles.selected]: selected
  })}
  onClick={_ => onAnswer && onAnswer({ id })}
>
  {text}
</div>
export default Answer
