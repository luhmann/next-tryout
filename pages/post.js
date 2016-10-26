import React from 'react'
import marked from 'marked'
import Head from 'next/head'

import { posts } from '../api/posts'


export default class PostPage extends React.Component {
  static async getInitialProps ({req}) {
    return posts[0]
  }

  parseMarkdown(input) {
    return { __html: marked(input) }
  }

  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css"/>
        </Head>
        <div dangerouslySetInnerHTML={this.parseMarkdown(posts[this.props.url.query.id].body)}></div>
      </div>
    )
  }
}
