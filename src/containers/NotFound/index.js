import React, {Component} from 'react'

class NotFound extends Component {
  componentWillMount() {
    const { staticContext } = this.props
    staticContext && (staticContext.notFound = true)
  }

  render() {
    return <div>404, 大胆,你们竟敢闯入我的秘密领地，你这是自寻死路</div>
  }
}

export default NotFound