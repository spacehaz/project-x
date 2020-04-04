import React from 'react'
import styles from './styles.module.scss'
import { Ranking, Icons } from 'components/common'

const GoodsCard = ({ ranking, title, price, image }) => {
  return <div className={styles.container}>
    {image ? <img className={styles.image} src={image}/> : <Icons.Photo />}
    <h4 className={styles.title}>{title}</h4>
    <Ranking value={ranking}  maxValue={5} />
    <div className={styles.price}>{price}</div>
  </div>
}

export default GoodsCard