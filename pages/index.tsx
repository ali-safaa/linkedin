import Head from 'next/head'
import React from 'react'
import Feed from '../components/Feed'
import Header from '../components/Header'
function index() {
  return (
    <div className="bg-[#F3F2EE]">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>
      <Header />
      <Feed />
    </div>
  )
}

export default index
