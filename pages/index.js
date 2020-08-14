import React, { useState } from 'react'
import Head from 'next/head'
import { Client } from '../prismic-configuration'
import Layout from '../components/Layout'
import AudioPlayer from '../components/AudioPlayer'
import ImageDisplay from '../components/ImageDisplay'

const Homepage = (props) => {
  return (
    <>
      <Head>
        <title>Gebo Life</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <ImageDisplay image={props.doc.data.main} />
        <AudioPlayer files={props.doc.data.audio} />
      </Layout>
    </>
  )
}

export default Homepage

export async function getServerSideProps(context) {
  const req = context.req
  const home = await Client(req).getSingle('homepage')
  return {
    props: {
      doc: home,
    },
  }
}
