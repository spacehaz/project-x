import React from 'react'
import styles from './styles.module'
import text from 'texts'

const Description = () => <div className={styles.container}>
  <div className={styles.logo}>COVID Sex Partner</div>
  <div className={styles.content}>
    <div className={styles.text}>{text('pages.main.texts.text_6')}</div>
    <div className={styles.text}>{text('pages.main.texts.text_7')}</div>
    <div className={styles.text}>{text('pages.main.texts.text_8')}</div>
    <div className={styles.text}>{text('pages.main.texts.text_9')}</div>
  </div>
</div>

export default Description