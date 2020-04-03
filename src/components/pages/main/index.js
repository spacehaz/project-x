import React from 'react'
import { actions, translate, platform, detectBrowser } from 'decorators'
import styles from './styles.module.scss'
import Header from './header'
import SearchBox from './search-box'
import Questions from './questions'

@actions(({ user: { loading } }) => ({ loading }))
@platform()
@detectBrowser()
@translate('pages.main')
class Main extends React.Component {

  render () {
    return <div className={styles.container}>
      <Header title={this.t('titles.main')} description={this.t('texts.main')} />
      <SearchBox />
      <Questions />
    </div>
  }
}

export default Main
