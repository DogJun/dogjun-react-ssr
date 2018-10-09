import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHomeList } from './store/actions'

class Home extends Component {
  componentDidMount () {
    this.props.getHomeList()
  }
  render () {
    return (
      <div>hello {this.props.name}</div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.home.name,
  list: state.home.list
})

const mapDispatchToProps = (dispatch) => ({
  getHomeList () {
    dispatch(fetchHomeList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)