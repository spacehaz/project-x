import React from 'react'
import styles from './styles.module'
import text from 'texts'

const Footer = () => <div className={styles.container}>
  {text('components.footer.copyright', { currentYear: +(new Date).getFullYear() })}
</div>
export default Footer
