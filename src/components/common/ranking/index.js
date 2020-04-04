import React from 'react'
import { Icons } from 'components/common'
import styles from './styles.module'

const Ranking = ({ value, maxValue }) => {
  const ranking = value / maxValue * 5
  const fullStars = parseInt(ranking)
  const halfStars = fullStars < ranking ? 1 : 0
  const emptyStars = 5 - fullStars - halfStars

  return <div className={styles.container}>
    {(new Array(fullStars)).fill().map((_, idx) => <Icons.FullStar key={idx} />)}
    {(new Array(halfStars)).fill().map((_, idx) => <Icons.HalfStar key={idx} />)}
    {(new Array(emptyStars)).fill().map((_, idx) => <Icons.EmptyStar key={idx} />)}
  </div>
}

export default Ranking