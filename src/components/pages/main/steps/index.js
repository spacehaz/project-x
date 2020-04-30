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
    title: 'Answer questions',
    color: '#94d2ff'
  },
  {
    index: 2,
    title: 'Pick any item',
    color: '#ff58e4' 
  }, {
    index: 3,
    title: 'Buy in your favourite shop',
    color: '#5dc5c4' 
  }
]

export default Steps