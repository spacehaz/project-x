import React from 'react'
import styles from './styles.module'
import classNames from 'classnames'

const Answer = ({ text, selectable, selected, onSelect, id, className }) => <div
  className={classNames(styles.container, className, {
    [styles.selectable]: selectable,
    [styles.selected]: selected
  })}
  onClick={_ => onSelect && onSelect({ id })}
>
  {text}
</div>
export default Answer
