import React from 'react'
import styles from './styles.module'

const Steps = () => <div className={styles.container}>
  <div className={styles.content}>
    {steps.map(({ index, title, color }) => <div className={styles.step}>
      <div className={styles.stepIndex} style={{ backgroundColor: color }}>{index}</div>
      <div className={styles.stepTitle}>{title}</div>
    </div>)}
  </div>
</div>


const steps = [
  {
    index: 1,
    title: 'Answer any amount of questions',
    color: '#94d2ff'
  },
  {
    index: 2,
    title: 'The more questions you answer the better choice you get ',
    color: '#ff58e4' 
  }, {
    index: 3,
    title: 'You can always go back to previous question or reload the page to start over',
    color: '#5dc5c4' 
  }
]

export default Steps