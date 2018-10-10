import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchHomeList } from './store/actions'

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
        {list.map(item => <div key={item.id}>{item.title}</div>)}
      </div>
    )
  }
  render () {
    return (
      <Fragment>
        <div>hello {this.props.name}</div>
        <div>
          { this.getList() }
        </div>
      </Fragment>
    )
  }
}
Home.loadData = (store) => {
  return store.dispatch(fetchHomeList())
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)