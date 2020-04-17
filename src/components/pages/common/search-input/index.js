import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { Preloader } from 'components/common'
import classNames from 'classnames'
import { Icons } from 'components/common'

export default ({ loading, question, onChange, keywords }) => {
  const inputRef = React.createRef()
  const spanRef = React.createRef()
  const [value, changeValue] = useState('')
  const [id, changeId] = useState(null)
  const [width, changeWidth] = useState(8)
  const [focused, changeFocus] = useState(false)
  useEffect(_ => {
    const spanWidth = spanRef.current.offsetWidth
    changeWidth(spanWidth)
  }, [value])
  useEffect(_ => {
    if (!question) { return }
    if (!id) { return }
    onChange({ value: value, answer_id: id, question_id: question.id })
  }, [id])
  useEffect(_ => {
    inputRef.current.focus()
  }, [(question || {}).title])
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
        onFocus={e => {
          changeFocus(true)
        }}
      />
      <span className={classNames(styles.question, {
        [styles.questionLoading]: loading
      })}>
        {(question || {}).title}
      </span>
    </div>
    {renderOptions({ focused, question, changeValue, inputRef, changeId, value })}
  </div>
}

const renderOptions = ({ question, changeValue, inputRef, changeId, value, focused }) => {
  if (!focused) { return null }
  if (!question) { return null }
  if (question.no_options) { return null }

  return <div className={styles.answers}>
    {question.answers.map(answer => {
      console.log({ answer })
      return <div
        className={classNames(styles.answer, {
          [styles.answerSimilar]: value.toLowerCase() !== '' && (answer.title).toLowerCase().indexOf(value.toLowerCase()) > -1,
          [styles.disabled]: answer.disabled
        })}
        onMouseDown={e => {
          if (answer.disabled) { return }
          // const newValue = value === '' ? answer.input_title : `${value} ${answer.input_title}`
          const newValue = answer.input_title
          if (answer.stop) {
            return inputRef.current.focus()
          }
          changeId && changeId(answer.id)
          changeValue && changeValue(newValue || '')
        }}
      >
        {answer.title}
      </div>
    })}
  </div>
}