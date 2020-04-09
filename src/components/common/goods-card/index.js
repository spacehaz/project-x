import React from 'react'
import styles from './styles.module.scss'
import { Ranking, Icons } from 'components/common'

const GoodsCard = ({ ranking, title, price, image, url }) => {
  return <div className={styles.container}>
    {image ? <img className={styles.image} src={image}/> : <div className={styles.image}><Icons.Photo /></div>}
    <h4 className={styles.title}>
      <a className={styles.url} target='_blank' href={url}>{title}</a>
    </h4>
    <Ranking value={ranking}  maxValue={5} />
    <div className={styles.price}>{price}</div>
  </div>
}

export default GoodsCard