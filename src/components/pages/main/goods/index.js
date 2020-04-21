import React from 'react'
import styles from './styles.module.scss'
import { GoodsCard, Preloader } from 'components/common'
import text from 'texts'

export default ({ items, loading }) => {
  
  if (loading) {
    return <div className={styles.container}>
      <div className={styles.content}>
        <Preloader />
      </div>
    </div>
  }
  return <div className={styles.container}>
    <div className={styles.content}>
      {items.map(({ image, id, buyingOptions = [], sellingStatus, title, url, price, sellerRanking }) => <GoodsCard
        ranking={sellerRanking / 20}
        image={image}
        key={id}
        bestOffer={buyingOptions.indexOf('BEST_OFFER') > -1}
        price={`${parseFloat(price.value)}$`}
        title={title}
        url={url}
      />)}
    </div>
  </div>
}