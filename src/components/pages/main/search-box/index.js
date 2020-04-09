import React, { useState } from 'react'
import styles from './styles.module'
import { SearchInput } from 'components/pages/common'
import text from 'texts'
import { debounce } from 'throttle-debounce'

const Searchbox = ({ onSearch, question, loading, emptyResults }) => {
  const search = debounce(300, ({ value }) => {
    if (!value) { return emptyResults && emptyResults() }
    onSearch && onSearch({ keywords: value })
  })
  return <div className={styles.container}>
    <SearchInput
      onChange={search}
      loading={loading}
      question={question}
    />
  </div>
}

export default Searchbox
