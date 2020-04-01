import React from 'react'
import styles from './styles.module'

const Question = ({ question }) => <div className={styles.container}>
  <div className={styles.question}>
    {question}
  </div>
</div>
export default Question
