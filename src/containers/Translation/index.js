import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { getTranslationList } from './store/actions'
import { Redirect } from 'react-router-dom'
import styles from './index.less'
import withStyle from '../../withStyle'

class Translation extends Component {
  componentDidMount () {
    if(!this.props.list.length) {
        this.props.getTranslationList()
    }
  }    
  getList () {
    const { list, login } = this.props
    return login ? <div>
      {
        list.map(v => <div className={styles.item} key={v.id}>{v.title}</div>)
      }
    </div>
      :
      <Redirect to='/'/>
  }

  render () {
    return (
      <Fragment>
        <div className={styles.container}>
          {this.getList()}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.translation.translationList,
    login: state.header.login
  }
}
const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList())
  }
})

const ExportTranslation = connect(mapStateToProps, mapDispatchToProps)(withStyle(Translation,styles))

ExportTranslation.loadData = store => {
  return store.dispatch(getTranslationList())
}

export default ExportTranslation