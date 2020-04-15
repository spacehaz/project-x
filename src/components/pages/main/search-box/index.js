import React, { useState } from 'react'
import styles from './styles.module'
import { SearchInput } from 'components/pages/common'
import text from 'texts'
import { debounce } from 'throttle-debounce'

const Searchbox = ({ onSearch, question, loading, emptyResults }) => {
  const search = debounce(1000, ({ value, answer_id, question_id }) => {
    if (!answer_id) { return emptyResults && emptyResults() }
    onSearch && onSearch({ value, answer_id, question_id })
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
