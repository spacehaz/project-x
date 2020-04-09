import React from 'react'
import { actions, translate, platform, detectBrowser } from 'decorators'
import styles from './styles.module.scss'
import Header from './header'
import SearchBox from './search-box'
import Questions from './questions'
import Goods from './goods'

@actions(({
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
  quizLoading
}))
@platform()
@detectBrowser()
@translate('pages.main')
class Main extends React.Component {
  render () {
    const { items, loading, quizLoading, question } = this.props
    return <div className={styles.container}>
      <Header title={this.t('titles.main')} description={this.t('texts.main')} />
      <SearchBox
        loading={quizLoading}
        question={question}
        onSearch={({ keywords }) => {
          this.actions().items.getItems({ keywords })
        }}
        emptyResults={_ => {
          this.actions().items.emptyResults()
        }}
      />
      <Goods items={items} loading={loading} />
    </div>
  }
}

export default Main
