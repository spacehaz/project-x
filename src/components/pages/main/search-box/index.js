import React, { useState } from 'react'
import styles from './styles.module'
import { SearchInput } from 'components/pages/common'
import text from 'texts'
import { debounce } from 'throttle-debounce'

const Searchbox = ({ maxPrice, onSearch, question, loading, onRevert, items, keywords }) => {
  const statistics = <div className={styles.statistics}>
    {text('pages.main.titles.totalResults', { count: items.length })}
  </div>

  const maxPriceContainer = <div className={styles.maxPrice}>
    {text('pages.main.titles.maxPrice', { maxPrice: `${maxPrice}$` })}
  </div>
  const search = debounce(1000, ({ value, answer_id, question_id }) => {
    onSearch && onSearch({ value, answer_id, question_id })
  })


  return <div className={styles.container}>
    <div className={styles.metaData}>
      {statistics}
      {maxPriceContainer}
    </div>
    <SearchInput
      onChange={search}
      loading={loading}
      onChangeById={onSearch}
      keywords={keywords}
      question={question}
      maxPrice={maxPrice}
      onRevert={onRevert}
    />
  </div>
}



export default Searchbox
