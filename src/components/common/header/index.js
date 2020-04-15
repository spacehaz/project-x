import React from 'react'
import styles from './styles.module'
import text from 'texts'

const Header = () => <div className={styles.container}><a href="/">{text('components.header.title')}</a></div>

export default Header
