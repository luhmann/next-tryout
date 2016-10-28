import React from 'react'
import Head from 'next/head'

export default ({title = 'Another great page'}) => (
  <Head>
    <title>{title}</title>
    { /* <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css"/> */ }
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/typeplate-starter-kit/3.0.1/css/typeplate.min.css"/>
  </Head>
)
