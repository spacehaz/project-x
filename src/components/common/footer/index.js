import React from 'react'
import styles from './styles.module'
import text from 'texts'

const Footer = () => {
  const year = new Date().getFullYear()
  return <div className={styles.container}>
    <div className={styles.contacts}>
      <div className={styles.madeBy}>{text('components.footer.madeBy')}</div><br/>
      <div className={styles.contact} dangerouslySetInnerHTML={{ __html: text('components.footer.contact', { email: '///@gmail.com' }) }}/>
    </div>
    <div className={styles.copyright}>
      <div>{text('components.footer.copyright')}</div>
      <div>{year}</div>
    </div>
  </div>
}
export default Footer
