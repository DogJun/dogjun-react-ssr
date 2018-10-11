import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store'

class Header extends Component {
  render () {
    const { login, handleLogin, handleLogout } = this.props 
    return (<div className="header">
      <Link to='/'>首页</Link>
      <br/>
      {login ? (
        <Fragment>
          <div>翻译列表</div>
          <div onClick={handleLogout}>登出</div>
        </Fragment>
      ) : <div onClick={handleLogin}>登录</div>}
    </div>)
  }
}

const mapStateToProps = (state) => ({
  login: state.header.login
})

const mapDispatchToProps = (dispatch) => ({
  handleLogin () {
    dispatch(actions.login())
  },
  handleLogout () {
    dispatch(actions.logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)