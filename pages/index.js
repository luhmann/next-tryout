import React from 'react'
import Head from 'next/head'
import css from 'next/css'
import Link from 'next/link'

import PageHeader from '../components/PageHeader'

export default () => (
  <div>
    <PageHeader></PageHeader>
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
