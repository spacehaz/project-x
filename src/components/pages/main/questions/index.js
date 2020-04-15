import React, { useState, useEffect } from 'react'
import styles from './styles.module'
import { Question, Answer, Ranking, GoodsCard } from 'components/common'
import text from 'texts'
import { Quiz } from 'components/containers'

const QuestionComponent = ({ questionIndex, question, onAnswer }) => {
  const [ questionNumber, setQuestionNumber ] = useState(1)
  useEffect(_ => console.log('answered'), [questionNumber])
  const currentQuestion = defineQuestion({ question, onAnswer })
  return <div className={styles.question}>
    {currentQuestion}
  </div>
}

const defineQuestion = ({ question, onAnswer }) => {
  const { type, text, id, answers } = question
  switch (type) {
    case 'basic':
      return <React.Fragment>
        <Question question={text} />
        <div className={styles.answers}>
          {answers.map(({ id, text }) => <Answer text='Yes!' selected onAnswer={_ => setQuestionNumber(2)} />)}          
        </div>
      </React.Fragment>
  }
} 

const Questions = ({ onAnswer, getQuestion, questionIndex, question }) => {
  return <Quiz QuestionComponent={QuestionComponent} />
}

export default Questions
