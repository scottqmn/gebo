import React from 'react'
import Head from 'next/head'
import { Client } from '../prismic-configuration'
import Layout from '../components/Layout'
import AudioPlayer from '../components/AudioPlayer'
import ImageDisplay from '../components/ImageDisplay'

const Homepage = ({ doc }) => {
  const { main, audio } = doc.data

  return (
    <>
      <Head>
        <title>Gebo Life</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <ImageDisplay image={main} />
        <AudioPlayer files={audio} />
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const { req } = context
  const home = await Client(req).getSingle('homepage')
  return {
    props: {
      doc: home,
    },
  }
}

export default Homepage
