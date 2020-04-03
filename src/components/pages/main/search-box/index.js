import React from 'react'
import styles from './styles.module'
import { Input, Preloader, Button, Icons } from 'components/common'
import text from 'texts'

const Searchbox = () => <div className={styles.container}>
  <Input icon={<Icons.MagnifyingGlass />} className={styles.input} placeholder={text('pages.main.titles.findPlaceholder')} />
  <Button>{text('common.buttons.search')}</Button>
</div>

export default Searchbox
