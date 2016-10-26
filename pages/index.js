import React from 'react'
import Head from 'next/head'
import css from 'next/css'
import Link from 'next/link'

export default () => (
  <div>
    <Head>
      <title>This is the Index-Page</title>
      <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css"/>
    </Head>
    <h1 className={style}>This is a welcome text</h1>
    <Link href="/async"><a>Asnyc</a></Link>
  </div>
)


const style = css({
  fontSize: '16px',
  fontWeight: 'bold',
  ':hover': {
    cursor: 'pointer',
    color: 'red'
  }
})
