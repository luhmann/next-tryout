import React from 'react'
import marked from 'marked'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'node-fetch'
import url from 'url'

import { getData } from '../lib/helper'
import PageHeader from '../components/PageHeader'


export default class PostPage extends React.Component {
  static async getInitialProps ({req}) {
    let id = url.parse(req.url, true).query.id
    console.log('id', id)
    return getData(id)
  }

  parseMarkdown(input) {
    return { __html: marked(input) }
  }

  getArticle() {
    return this.parseMarkdown( this.props.postBody.body || getData(this.props.url.query.id) )
  }

  render() {
    return (
      <div>
        <PageHeader title="A post title"></PageHeader>
        <div className="pure-g">
          <div className="pure-u-8-24">This is a sidebar</div>
          <div className="pure-u-16-24" dangerouslySetInnerHTML={this.getArticle()}></div>
        </div>
        <Link href="/post?id=1"><a>Second Post</a></Link>
      </div>
    )
  }
}
