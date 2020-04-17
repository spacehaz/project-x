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
      {items.map(({ image, id, sellingStatus, title, url, price, sellerRanking }) => <GoodsCard
        ranking={sellerRanking / 20}
        image={image}
        key={id}
        price={`${parseFloat(price.__value__)}$`}
        title={title}
        url={url}
      />)}
    </div>
  </div>
}