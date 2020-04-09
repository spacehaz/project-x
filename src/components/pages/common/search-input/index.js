import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { Preloader } from 'components/common'
import classNames from 'classnames'
import { Icons } from 'components/common'

export default ({ loading, question, onChange }) => {
  const inputRef = React.createRef()
  const spanRef = React.createRef()
  const [value, changeValue] = useState('')
  const [width, changeWidth] = useState(8)
  useEffect(_ => {
    const spanWidth = spanRef.current.offsetWidth
    changeWidth(spanWidth)
    onChange({ value: value })
  }, [value])
  return <div className={styles.container} onClick={_ => inputRef.current.focus()}>
    <Icons.MagnifyingGlass />
    <span
      ref={spanRef}
      className={styles.inputSizer}
    >
      {value}
    </span>
    <input
      autoFocus
      style={{ width: `${width}px` }}
      className={styles.input}
      type='text'
      ref={inputRef}
      onChange={e => {
        changeValue(e.target.value)
      }}
    />
    <span className={classNames(styles.question, {
      [styles.questionLoading]: loading
    })}>
      {question}
    </span>
  </div>
}