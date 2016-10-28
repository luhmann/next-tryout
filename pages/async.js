import React from 'react'
import fetch from 'node-fetch'

import PageHeader from '../components/PageHeader'

export default class AsyncTryout extends React.Component {
  static async getInitialProps ({req}) {
    const result = await fetch('http://jsonplaceholder.typicode.com/posts/1')
    return result.json()
  }
  render() {
    return (
      <div>
        <PageHeader></PageHeader>
        <div>This is the async test page {this.props.id}</div>
      </div>
    )
  }
}
