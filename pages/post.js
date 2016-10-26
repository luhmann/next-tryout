import React from 'react'
import marked from 'marked'

import { posts } from '../api/posts'


export default class PostPage extends React.Component {
  static async getInitialProps ({req}) {
    console.log(req, this.props)
    return posts[0]
  }

  constructor(props) {
    super(props)
    console.log(this.props.url)
  }


  parseMarkdown(input) {
    return { __html: marked(input) }
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={this.parseMarkdown(posts[this.props.url.query.id].body)}></div>
    )
  }
}
