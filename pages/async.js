import React from 'react'

export default class AsyncTryout extends React.Component {
  static async getInitialProps ({req}) {
    const result = await fetch('http://jsonplaceholder.typicode.com/posts/1')
    return result.json()
  }
  render() {
    return (
      <div>
        This is the async test page {this.props.id}
      </div>
    )
  }
}
