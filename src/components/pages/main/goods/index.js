/* global ga, ym */

import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { GoodsCard, Preloader, Button } from 'components/common'
import text from 'texts'

export default ({ items, loading, question, error }) => {
  const [ cardsCount, setCardsCount ] = useState(6)
  useEffect(_ => {
    setCardsCount(6)
  }, [(question || {}).id])



  const loadMore = <Button
    className={styles.button}
    disabled={items.length === 0 || cardsCount >= items.length}
    onClick={_ => {
      ga('send', 'event', 'Items', `loadMoreClick`)
      ym(62556976, 'reachGoal', `loadMoreClick`)
      setCardsCount(cardsCount + 6)
    }}
  >
    {text('common.buttons.loadMore')}
  </Button>

  if (loading) {
    return <div className={styles.container}>
      <div className={styles.content}>
        <Preloader />
      </div>
    </div>
  }
  if (error) {
    return <div className={styles.error}>
      {text(`pages.main.errors.${error}`)}
    </div>
  }
  return <div className={styles.container}>
    <div className={styles.content}>
      {items.filter((item, idx) => idx + 1 <= cardsCount).map(({ image, id, buyingOptions = [], sellingStatus, title, url, price, sellerRanking }) => <GoodsCard
        ranking={sellerRanking / 20}
        image={image}
        key={id}
        bestOffer={buyingOptions.indexOf('BEST_OFFER') > -1}
        price={`${parseFloat(price.value)}$`}
        title={title}
        url={url}
      />)}
    </div>
    {loadMore}
  </div>
}