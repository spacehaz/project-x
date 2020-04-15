import React from 'react'
import { actions, translate, platform, detectBrowser } from 'decorators'
import styles from './styles.module.scss'
import Header from './header'
import SearchBox from './search-box'
import Questions from './questions'
import Goods from './goods'

@actions(({
  filters: {
    filters
  },
  items: {
    items,
    loading
  },
  quiz: {
    loading: quizLoading,
    question
  }
}) => ({
  items,
  loading,
  question,
  filters,
  quizLoading
}))
@platform()
@detectBrowser()
@translate('pages.main')
class Main extends React.Component {
  componentDidMount () {
    this.actions().quiz.getQuestion({})
  }

  render () {
    const { items, loading, quizLoading, question, filters } = this.props
    return <div className={styles.container}>
      <Header title={this.t('titles.main')} description={this.t('texts.main')} />
      <SearchBox
        loading={quizLoading}
        question={question}
        onSearch={({ answer_id, question_id, value }) => {
          this.actions().quiz.answer({ answer_id, question_id, value })
        }}
        emptyResults={_ => {
          return
          this.actions().items.emptyResults()
        }}
      />
      <Goods items={items} loading={loading} />
    </div>
  }
}

export default Main
