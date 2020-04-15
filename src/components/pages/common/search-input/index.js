import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { Preloader } from 'components/common'
import classNames from 'classnames'
import { Icons } from 'components/common'

export default ({ loading, question, onChange }) => {
  const inputRef = React.createRef()
  const spanRef = React.createRef()
  const [value, changeValue] = useState('')
  const [id, changeId] = useState(null)
  const [width, changeWidth] = useState(8)
  useEffect(_ => {
    const spanWidth = spanRef.current.offsetWidth
    changeWidth(spanWidth)
  }, [value])
  useEffect(_ => {

    if (!question) { return }
    if (!id) { return }
    console.log({ value: value, answer_id: id, question_id: question.id })
    onChange({ value: value, answer_id: id, question_id: question.id })
  }, [id])
  return <div>
    <div className={styles.inputContainer} onClick={_ => inputRef.current.focus()}>
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
        value={value}
        onChange={e => {
          changeValue(e.target.value)
        }}
      />
      <span className={classNames(styles.question, {
        [styles.questionLoading]: loading
      })}>
        {(question || {}).title}
      </span>
    </div>
    {renderOptions({ question, changeValue, inputRef, changeId })}
  </div>
}

const renderOptions = ({ question, changeValue, inputRef, changeId }) => {
  if (!question) { return null }
  if (question.no_options) { return null }
  return <div className={styles.answers}>
    {question.answers.map(answer => <div
      className={styles.answer}
      onClick={_ => {
        console.log('here')
        changeId && changeId(answer.id)
        changeValue && changeValue(answer.input_title)
      }}
    >
      {answer.title}
    </div>)}
  </div>
}