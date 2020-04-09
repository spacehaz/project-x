import React, { useEffect } from 'react'
import styles from './styles.module'
import text from 'texts'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const Quiz = ({ getInitialQuestion, onAnswer, questionIndex, question, QuestionComponent }) => {
  useEffect(() => {
    getInitialQuestion()
  }, [])
  return <div className={styles.container}>
    <QuestionComponent onAnswer={({ questionId, answerIds }) => onAnswer({ questionId, answerIds })} questionIndex={questionIndex} question={question} />
  </div>
}

const mapStateToProps = ({
  quiz: {
    questionIndex,
    question,
    loading
  }
}) => ({
  questionIndex,
  question,
  loading
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  getInitialQuestion: () => dispatch({ type: '*QUIZ.GET_QUESTION' }),
  onAnswer: ({ questionId, answerIds }) => dispatch({ type: '*QUIZ.ANSWER', payload: { questionId, answerIds } })
})
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Quiz)
)

// const QUESTIONS = [
//   {
//     question: 'Why do you want to buy it?',
//     type: 'basic',
//     id: 1,
//     answers: [
//       { text: 'As a present', id: 1 },
//       { text: 'For myself', id: 2 }
//     ]
//   }
// ]