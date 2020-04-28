import React from 'react'
import { actions, translate, platform, detectBrowser } from 'decorators'
import styles from './styles.module.scss'
import Header from './header'
import SearchBox from './search-box'
import Questions from './questions'
import Goods from './goods'
import Description from './description'
import Steps from './steps'

@actions(({
  items: {
    items,
    loading,
    maxPrice,
    error
  },
  quiz: {
    loading: quizLoading,
    question,
    keywords
  }
}) => ({
  items,
  loading,
  maxPrice,
  question,
  quizLoading,
  keywords,
  error
}))
@platform()
@detectBrowser()
@translate('pages.main')
class Main extends React.Component {
  componentDidMount () {
    this.actions().quiz.getQuestion({})
  }

  render () {
    const { items, error, loading, keywords, maxPrice, quizLoading, question } = this.props
    return <div className={styles.container}>
      <Header />
      <Steps />
      <SearchBox
        items={items}
        loading={quizLoading || loading}
        question={question}
        keywords={keywords}
        maxPrice={maxPrice}
        error={error}
        onSearch={({ answer_id, question_id, value }) => {
          this.actions().quiz.answer({ answer_id, question_id, value })
        }}
        onRevert={({ question_id }) => {
          this.actions().quiz.revertAnswer({ question_id })
        }}
      />
      <Goods items={items} loading={loading} question={question} error={error} />

      <Description />
    </div>
  }
}

export default Main
