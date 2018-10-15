import React, { Component, Fragment } from 'react'
import {Helmet} from "react-helmet"
import withStyle from '../../withStyle'
import { connect } from 'react-redux'
import { fetchHomeList } from './store/actions'
import styles from './index.less'

class Home extends Component {
  componentDidMount () {
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }
  getList () {
    const { list } = this.props
    return (
      <div>
        {list.map(item => <div key={item.id} className={styles.item}>{item.title}</div>)}
      </div>
    )
  }
  render () {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>react ssr 脚手架 - 首页</title>
          <meta name="description" content="首页的描述"/>
        </Helmet>
        <div className={styles.container}>hello1 {this.props.name}</div>
        <div>
          { this.getList() }
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.home.name,
  list: state.home.newsList
})

const mapDispatchToProps = (dispatch) => ({
  getHomeList () {
    dispatch(fetchHomeList())
  }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, styles))
ExportHome.loadData = (store) => {
  return store.dispatch(fetchHomeList())
}
export default ExportHome