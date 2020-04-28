import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { Preloader } from 'components/common'
import classNames from 'classnames'
import { Icons, Button } from 'components/common'

export default ({ loading, maxPrice, error, question, onChange, onChangeById, keywords, onRevert }) => {
  const inputRef = React.createRef()
  const spanRef = React.createRef()
  const valuesRef = React.createRef()
  const [value, changeValue] = useState('')
  const [values, changeValues] = useState([])
  const [id, changeId] = useState(null)
  const [width, changeWidth] = useState(8)
  const [focused, changeFocus] = useState(false)
  useEffect(_ => {
    const spanWidth = spanRef.current.offsetWidth
    changeWidth(spanWidth)
    if (question && question.no_next_question) {
      onChange({ value: value })
    }
  }, [value])

  useEffect(_ => {
    document.addEventListener('click', e => {
      if(!e.target.closest(`.${styles.inputContainer}`)) {
        console.log(changeFocus(false))
        // inputRef.current.blur()
      }
    })
  }, [])
  useEffect(_ => {
    if (!question) { return }
    if (!id) { return }
    onChangeById({ value: value, answer_id: id, question_id: question.id })
  }, [id])
  useEffect(_ => {
    if ((question || {}).id === 1 || !(question || {}).id || error) { return }
    inputRef.current.focus()
  }, [(question || {}).title])
  return <div>
    <div className={styles.inputContainer} onClick={_ => inputRef.current.focus()}>
      <Icons.MagnifyingGlass />
      <span ref={valuesRef} className={styles.values}>{values.filter(item => item.value).map(item => item.value).join(' ')}</span>
      <span
        ref={spanRef}
        className={styles.inputSizer}
      >
        {value}
      </span>
      <input
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
    <Button
      className={styles.revert}
      disabled={values.length === 0}
      onClick={_ => {
        if (values.length === 0) { return }
        const questionToRevert = values[values.length - 1].question
        if (questionToRevert < 1) { return }
        const newValues = values.filter(value => Number(value.question) !== Number(questionToRevert))
        changeValues(newValues)
        changeId(null)
        onRevert && onRevert({ question_id: questionToRevert })
      }}
    >
      Go to previous question
    </Button>
    {renderOptions({
      focused,
      maxPrice,
      question,
      loading,
      changeValue,
      inputRef,
      changeId,
      value,
      values,
      changeValues
    })}
  </div>
}

const renderOptions = ({ question, maxPrice, changeValues, changeValue, inputRef, changeId, value, focused, values, loading }) => {
  if (!focused) { return null }
  if (!question) { return null }
  if (!question.answers) { return null }

  return <div className={styles.answers}>
    {question.answers.map(answer => {
      return <div
        className={classNames(styles.answer, {
          [styles.answerSimilar]: value.toLowerCase() !== '' && (answer.title).toLowerCase().indexOf(value.toLowerCase()) > -1,
          [styles.disabled]: answer.disabled || loading
        })}
        onMouseDown={e => {
          if (loading) { return }
          // const newValue = value === '' ? answer.input_title : `${value} ${answer.input_title}`
          const newValue = answer.input_title
          // if (answer.stop) {
          //   console.log('here')
          //   return inputRef.current.focus()
          // }
          changeId && changeId(answer.id)
          changeValue && changeValue('')
          changeValues && changeValues(values.concat({
            value: newValue,
            question: question.id
          }))
        }}
      >
        {renderAnswerTitle({ answer, maxPrice })}
      </div>
    })}
  </div>
}

const renderAnswerTitle = ({ answer, maxPrice }) => {
  const { title, calculate, key } = answer
  if (calculate && calculate === 'price') {
    const priceInterval = key.split(':')
    const [ min, max ] = (priceInterval[1]).split('__')
    const pricePercent = maxPrice / 100
    
    const minPriceLimit = pricePercent * Number(min)
    const maxPriceLimit = pricePercent * Number(max)
    return `${Math.round(minPriceLimit)}$ - ${Math.round(maxPriceLimit)}$`
  }
  return title
}