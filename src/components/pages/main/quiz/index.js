import React from 'react'
import styles from './styles.module'
import { Question, Answer } from 'components/common'
import text from 'texts'

const Quiz = () => <div className={styles.container}>
  <div className={styles.question}>
    <Question question='Whats up!' />
    <div className={styles.answers}>
      <Answer text='Yes!' />
      <Answer text='No!' />  
    </div>
  </div>
  <div className={styles.question}>
    <Question question='Whats up!' />
    <div className={styles.answers}>
      <Answer text='Yes!' />
      <Answer text='No!' />  
    </div>
  </div>
  <div className={styles.question}>
    <Question question='Whats up!' />
    <div className={styles.answers}>
      <Answer text='Yes!' />
      <Answer text='No!' />  
    </div>
  </div>
  <div className={styles.question}>
    <Question question='Whats up!' />
    <div className={styles.answers}>
      <Answer text='Yes!' />
      <Answer text='No!' />  
    </div>
  </div>
  <div className={styles.question}>
    <Question question='Whats up!' />
    <div className={styles.answers}>
      <Answer text='Yes!' />
      <Answer text='No!' />  
    </div>
  </div>
  
</div>

export default Quiz
